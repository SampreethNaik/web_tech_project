
//Profile a connected undirected unweighted graph for the following properties.
#include <stdlib.h>
#include "graphprofile.h"

// 1. What is average degree of a vertex in the graph?
int avgDegree(int **graph, int number_of_nodes) {
	int I,J,degree=0;
	if(number_of_nodes)
	{
		for(I=0;I<number_of_nodes;I++)
		{
			for(J=0;J<number_of_nodes;J++)
			{
				if(graph[I][J]) degree++;
			}	
		}
		return degree/number_of_nodes;
	}
    return 0;
}

// 2. Is the graph a regular graph?
int isRegular(int **graph, int number_of_nodes) {
	int I,J;
	int averageDegree=avgDegree(graph,number_of_nodes);
	for(I=0;I<number_of_nodes;I++)
	{
		int degreeOfI=0;
		for(J=0;J<number_of_nodes;J++)
		{
			if(graph[I][J])	degreeOfI++;
		}
		if(degreeOfI!=averageDegree)
			return 0; 
	}
    return 1;
}

// 3. Is the graph a complete graph?
int isComplete(int **graph, int number_of_nodes) {
    if(isRegular(graph,number_of_nodes) && avgDegree(graph,number_of_nodes)==number_of_nodes-1)
    	return 1;
    return 0;
}

// 4. Is the graph a cycle graph?
int isCycleGraph(int **graph, int number_of_nodes) {
    if(isRegular(graph,number_of_nodes) && avgDegree(graph,number_of_nodes)==2)
		return 1;
    return 0;
}

// 5. Is the graph a path graph but not a cycle graph?
int isPathGraph(int **graph, int number_of_nodes) {
    int I,J,Pendant=0;
    for(I=0;I<number_of_nodes;I++)
    {
    	int degreeOfI=0;
    	for(J=0;J<number_of_nodes;J++)
    	{
    		if(graph[I][J]) degreeOfI++;
    	}
    	if(degreeOfI==1)
    		Pendant++;
    	else if(degreeOfI==2)
    		continue;
    	else
    		return 0;
    }
    if(Pendant==2)
    	return 1;
    return 0;
}

// 6. Does the graph has an Euler circuit?
int hasEulerCkt(int **graph, int number_of_nodes) {
    int I,J;
	for(I=0;I<number_of_nodes;I++)
	{
		int degreeOfI=0;
		for(J=0;J<number_of_nodes;J++)
		{
			if(graph[I][J]) degreeOfI++;
		}
		if(degreeOfI%2)
			return 0;
	}
    return 1;
}

// 7. Does the graph has an Euler path but not an Euler circuit?
int hasEulerPath(int **graph, int number_of_nodes) {
    int I,J,OddCounter=0;
	for(I=0;I<number_of_nodes;I++)
	{
		int degreeOfI=0;
		for(J=0;J<number_of_nodes;J++)
		{
			if(graph[I][J]) degreeOfI++;
		}
		if(degreeOfI%2)
			OddCounter++;
	}
	if(OddCounter==2)
    	return 1;
    return 0;
}

// 8. Does the graph satisfy the sufficient condition of the Ore's theorem?
// Sufficient condition for the graph to have a Hamilton according the Ore's theorem:
// deg(u) + deg(v) ≥ number_of_nodes for every pair of nonadjacent vertices u and v in the graph
int satifiesOresTheorem(int **graph, int number_of_nodes) {
    int u,v,I,degreeOfNodeU,degreeOfNodeV;
    for(u=0;u<number_of_nodes-1;u++)
    {
    	for(v=u+1;v<number_of_nodes;v++)
    	{
    		if(!graph[u][v])
    		{
    			degreeOfNodeU=degreeOfNodeV=0;
    			for(I=0;I<number_of_nodes;I++)
    			{
    				if(graph[u][I])
    					degreeOfNodeU++;
    				if(graph[v][I])
    					degreeOfNodeV++;
    			}
    			if(degreeOfNodeU+degreeOfNodeV<number_of_nodes)	
    				return 0;
    		}
    	}
    }
    return 1;
}