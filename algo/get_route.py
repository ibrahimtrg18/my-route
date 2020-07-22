from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse

import pandas as pd
import random
import numpy as np

from ast import literal_eval

APP = Flask(__name__)
API = Api(APP)

class findbestroute(Resource):
    def __init__(self):
        self.default_switch_prob = 0.90
        self.default_max_iter = 100
        self.default_pop_size = 50
        self.limit = 3

    def total_distance(self,path):
        return sum([distance[path[i]][path[i+1]] for i in range(0,len(path)-1)]+[distance[path[-1]][path[0]]])

    def evaluate_population(self,population):
        return [self.total_distance(individual) for individual in population]

    def order_based_crossover(self,individual,gbest):
        n = len(individual)
        children = individual.copy()

        index_choice = sorted(np.random.choice(range(n),size=np.random.randint(2,n),replace=False))
        sub_individual = [children[i] for i in index_choice]
        index_gbest = [gbest.index(i) for i in gbest if i in sub_individual]

        for i,j in zip(index_choice,index_gbest):
            children[i] = gbest[j]
        return children

    def discard_pollen(self,individual):
        new_individual = list(reversed(individual))
        if self.total_distance(new_individual) < self.total_distance(individual):
            return new_individual
        else:
            return individual

    def partial_reverse(self,individual):
        n = len(individual)
        new_individual = individual
        
        left = np.random.randint(0,n)
        right = np.random.randint(0,n)
        left,right = min(left,right),max(left,right)
        for i in range(right-left):
            partial_individual = new_individual.copy()
            partial_individual[left:left+i+1] = reversed(partial_individual[left:left+i+1])
            if self.total_distance(partial_individual) < self.total_distance(new_individual):
                new_individual = partial_individual
        return new_individual

    def partial_exchange(self,individual):
        n = len(individual)
        new_individual = individual
        
        left = np.random.randint(0,n)
        right = np.random.randint(0,n)
        left,right = min(left,right),max(left,right)
        for i in range((right-left)//2+1):
            partial_individual = new_individual.copy()
            partial_individual[left+i],partial_individual[right-i] = partial_individual[right-i],partial_individual[left+i]
            if self.total_distance(partial_individual) < self.total_distance(new_individual):
                new_individual = partial_individual
        return new_individual

    def get(self):
        #parse parameter and set hyperparameter
        parser = reqparse.RequestParser()
        parser.add_argument('cities',type=str,location='form')
        parser.add_argument('switch_probability',type=float,location='form')
        parser.add_argument('max_iteration',type=int,location='form')
        parser.add_argument('population_size',type=int,location='form')
        parser.add_argument('start_city',type=str,location='form')
        parser.add_argument('distance_matrix',type=str,location='form')
        
        args = parser.parse_args()
        print(args)
        cities = args['cities']
        cities = cities.split(',')
        switch_prob = args['switch_probability']
        if switch_prob == None:
            switch_prob = self.default_switch_prob
        max_iter = args['max_iteration']
        if max_iter == None:
            max_iter = self.default_max_iter
        pop_size = args['population_size']
        if pop_size == None:
            pop_size = self.default_pop_size
        start_city = args['start_city']
        global distance 
        distance = pd.DataFrame.from_dict(literal_eval(args['distance_matrix']))

        #initiate new population
        dim = len(cities)
        population = [cities.copy() for i in range(pop_size)]
        population_limit = [0 for i in range(pop_size)]
        for individual in population:
            random.shuffle(individual)

        #get each of population's score and find gbest
        population_score = self.evaluate_population(population)
        gbest = population[np.argmin(population_score)]

        for generation in range(max_iter):
            for i in range(len(population)):
                if random.uniform(0,1) < switch_prob:
                    #global pollination
                    #order-based crossover
                    children = self.order_based_crossover(population[i],gbest)
                    if population_limit[i] >= self.limit:
                        population[i] = self.discard_pollen(population[i])
                        population_limit[i] = 0
                else:
                    #local pollination
                    children1 = self.partial_reverse(population[i])
                    children2 = self.partial_exchange(population[i])
                    if self.total_distance(children1) < self.total_distance(children2):
                        children = children1
                    else:
                        children = children2
                #children replace parent if better
                if self.total_distance(children) < self.total_distance(population[i]):
                    population[i] = children
                    population_limit[i] = 0
                else:
                    population_limit[i] += 1
                    
            #update gbest
            population_score = self.evaluate_population(population)
            local_best = population[np.argmin(population_score)]
            if self.total_distance(local_best) < self.total_distance(gbest):
                gbest = local_best.copy()
            
            #early stopping if every individual are same
            if population.count(population[0]) == len(population):
                if bool(start_city):
                    gbest = gbest[gbest.index(start_city):]+gbest[:gbest.index(start_city)]
                return {'route':gbest+[gbest[0]],'total_distance':float(self.total_distance(gbest))}
        if bool(start_city):
            gbest = gbest[gbest.index(start_city):]+gbest[:gbest.index(start_city)]
        return {'route':gbest+[gbest[0]],'total_distance':float(self.total_distance(gbest))}

class revokeroute(Resource):
    def __init__(self):
        self.default_switch_prob = 0.90
        self.default_max_iter = 100
        self.default_pop_size = 50
        self.limit = 3

    def total_distance(self,path,current_city,start_city):
        return sum([distance[current_city][path[0]]]+[distance[path[i]][path[i+1]] for i in range(0,len(path)-1)]+[distance[path[-1]][start_city]])

    def evaluate_population(self,population,current_city,start_city):
        return [self.total_distance(individual,current_city,start_city) for individual in population]

    def order_based_crossover(self,individual,gbest):
        n = len(individual)
        children = individual.copy()
        if n > 2:
            index_choice = sorted(np.random.choice(range(n),size=np.random.randint(2,n),replace=False))
        else:
            return gbest
        sub_individual = [children[i] for i in index_choice]
        index_gbest = [gbest.index(i) for i in gbest if i in sub_individual]

        for i,j in zip(index_choice,index_gbest):
            children[i] = gbest[j]
        return children

    def discard_pollen(self,individual,current_city,start_city):
        new_individual = list(reversed(individual))
        if self.total_distance(new_individual,current_city,start_city) < self.total_distance(individual,current_city,start_city):
            return new_individual
        else:
            return individual

    def partial_reverse(self,individual,current_city,start_city):
        n = len(individual)
        new_individual = individual
        
        left = np.random.randint(0,n)
        right = np.random.randint(0,n)
        left,right = min(left,right),max(left,right)
        for i in range(right-left):
            partial_individual = new_individual.copy()
            partial_individual[left:left+i+1] = reversed(partial_individual[left:left+i+1])
            if self.total_distance(partial_individual,current_city,start_city) < self.total_distance(new_individual,current_city,start_city):
                new_individual = partial_individual
        return new_individual

    def partial_exchange(self,individual,current_city,start_city):
        n = len(individual)
        new_individual = individual
        
        left = np.random.randint(0,n)
        right = np.random.randint(0,n)
        left,right = min(left,right),max(left,right)
        for i in range((right-left)//2+1):
            partial_individual = new_individual.copy()
            partial_individual[left+i],partial_individual[right-i] = partial_individual[right-i],partial_individual[left+i]
            if self.total_distance(partial_individual,current_city,start_city) < self.total_distance(new_individual,current_city,start_city):
                new_individual = partial_individual
        return new_individual

    def separate_route(self,best_route,revoked_city,cities,addition=True):
        current_city = revoked_city
        if addition:
            new_cities = best_route[best_route.index(current_city)+1:]+cities
        else: #deletion
            new_cities = best_route[best_route.index(current_city)+1:]
            new_cities = [i for i in new_cities if i not in cities]
        start_cities = best_route[0]
        visited_cities = best_route[0:best_route.index(current_city)]
        return current_city, new_cities, start_cities, visited_cities

    def get(self):
        #parse parameter and set hyperparameter
        parser = reqparse.RequestParser()
        parser.add_argument('route',type=str,location='form')
        parser.add_argument('revoked_city',type=str,location='form')
        parser.add_argument('dynamic_city',type=str,location='form')
        parser.add_argument('operation',type=str,location='form')
        parser.add_argument('switch_probability',type=float,location='form')
        parser.add_argument('max_iteration',type=int,location='form')
        parser.add_argument('population_size',type=int,location='form')
        parser.add_argument('distance_matrix',type=str,location='form')
        args = parser.parse_args()
        route = args['route']
        route = route.split(',')[:-1]
        revoked_city = args['revoked_city']
        dynamic_city = args['dynamic_city']
        dynamic_city = dynamic_city.split(',')
        operation = args['operation']
        switch_prob = args['switch_probability']
        if switch_prob == None:
            switch_prob = self.default_switch_prob
        max_iter = args['max_iteration']
        if max_iter == None:
            max_iter = self.default_max_iter
        pop_size = args['population_size']
        if pop_size == None:
            pop_size = self.default_pop_size

        global distance 
        distance = pd.DataFrame.from_dict(literal_eval(args['distance_matrix']))

        #revoke route, add/delete city(s)
        if operation == 'addition':
            addition = True
        else:
            addition = False
        current_city, cities, start_city, visited_cities = self.separate_route(route,revoked_city,dynamic_city,addition)
        
        #initiate new population
        dim = len(cities)
        population = [cities.copy() for i in range(pop_size)]
        population_limit = [0 for i in range(pop_size)]
        for individual in population:
            random.shuffle(individual)

        #get each of population's score and find gbest
        population_score = self.evaluate_population(population,current_city,start_city)
        gbest = population[np.argmin(population_score)]

        for generation in range(max_iter):
            for i in range(len(population)):
                if random.uniform(0,1) < switch_prob:
                    #global pollination
                    #order-based crossover
                    children = self.order_based_crossover(population[i],gbest)
                    if population_limit[i] >= self.limit:
                        population[i] = self.discard_pollen(population[i],current_city,start_city)
                        population_limit[i] = 0
                else:
                    #local pollination
                    children1 = self.partial_reverse(population[i],current_city,start_city)
                    children2 = self.partial_exchange(population[i],current_city,start_city)
                    if self.total_distance(children1,current_city,start_city) < self.total_distance(children2,current_city,start_city):
                        children = children1
                    else:
                        children = children2
                #children replace parent if better
                if self.total_distance(children,current_city,start_city) < self.total_distance(population[i],current_city,start_city):
                    population[i] = children
                    population_limit[i] = 0
                else:
                    population_limit[i] += 1
                    
            #update gbest
            population_score = self.evaluate_population(population,current_city,start_city)
            local_best = population[np.argmin(population_score)]
            if self.total_distance(local_best,current_city,start_city) < self.total_distance(gbest,current_city,start_city):
                gbest = local_best.copy()
            
            #early stopping if every individual are same
            if population.count(population[0]) == len(population):
                break

        #return result
        result = dict()
        result['original_route'] = route+[route[0]]
        if visited_cities == []:
            result['visited_route'] = []
            result['visited_distance'] = 0
        elif len(visited_cities) == 1:
            result['visited_route'] = visited_cities+[current_city]
            result['visited_distance'] = float(distance[start_city][current_city])
        else:
            result['visited_route'] = visited_cities+[current_city]
            result['visited_distance'] = float(self.total_distance(visited_cities[1:],current_city,start_city))
        if addition:
            result['added_cities'] = dynamic_city
        else:
            result['deleted_cities'] = dynamic_city
        result['new_route'] = [current_city]+gbest+[start_city]
        result['new_distance'] = float(self.total_distance(gbest,current_city,start_city))
        result['total_distance'] = result['new_distance']+result['visited_distance']
        return result

API.add_resource(findbestroute, '/findbestroute')
API.add_resource(revokeroute, '/revokeroute')

if __name__ == '__main__':
    APP.run(debug=True)