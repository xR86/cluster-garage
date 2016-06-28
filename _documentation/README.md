# cluster-garage
SPA/dashboard for team management
 
 
##Architecture
![architecture](cluster-garage-application-layer.png?raw=true "architecture")
> Figure 1: **Application layer diagram** - Cluster Garage is a 3-tier application that uses Angular on client-side, Node.js on server-side (with PM2 for server clusterization and load balancing, and OAuth authentication with Passport middleware), and Mongoose as ORM for MongoDB.



##ERD


![ERD](cluster-garage-ERD.png?raw=true "ERD")
> Figure 2: ERD for Cluster Garage - every table/collection will have an implicit id as PK
 
**Obs1**: Any Id field will use the standard **ObjectId** format of MongoDB ("_id" field). Otherwise, validation and hardcoding (or generating method other than ObjectId) is needed to uniquely identify a document.
 
**Obs2**: The schema will be enforced through Mongoose models.
 
**Obs3**: To make it more efficient (and/or more portable), the FK will be implemented through [MongoDB references](https://docs.mongodb.com/manual/reference/database-references/).

<br />
 
####Further ERD additions (to be added):
* Teams - projects subdocument -> add updates subdocument (updates when needed for projects)
* Users -> add lastLogin field (timestamp)
* Books/Webinars -> add scope field (used for - general or certain project) - (obs: dashboard sections in regard to project)
* Webinars -> add comment subdocuments
 
###User mock
```
{
	"_id": "<ObjectId-00>",
	"firstName": "John",
	"lastName": "Doe",
	"email": "john.doe@johndoe.io",
	"pass": "<hashed-pass>",
	"team": "<ObjectId-1>",
	"description": "Random guy",
	"avatar": "<link-to-png>",
	"role": "basic",
	"badges": [	
		{ 
			"badgeId": "<ObjectId-2>",
			"badgeDate": "<date-1>" 
		}
	]
}
```
###Team mock
```
{
	"_id": "<ObjectId-1>",
	"name": "DoesTeam",
	"users": [
		{ "userId": "<ObjectId-00>" },
		{ "userId": "<ObjectId-01>" }
	],
	"projects": [
		{ "projectName": "Cluster Garage SPA" }
	]
}
```
###Badge mock
```
{
	"_id": "<ObjectId-2>",
	"type": "technical",
	"name": "Most commits per week",
	"description": "The user has made the most commits in a given week."
}
```	
###Category mock
```
{
	"_id": "<ObjectId-3>",
	"name": "Angular",
	"addedBy": "<ObjectId-00>"
}
```	
###Book mock
```
{
	"category": "<ObjectId-3>",
	"title": "ng book",
	"cover": "https://d.gr-assets.com/books/1388883604l/20439304.jpg",
	"type": "file",
	"link": "<link-to-pdf>",
	"description": "What if you could master the entire framework with solid foundations in less time",
	"rating": 5,
	"ratingCount": 1,
	"addedBy": "<ObjectId-00>",
	"team": "<ObjectId-1>",
	"dateAdded": "<date-2>"
}
```
###Webinar mock
```
{
	"category": "<ObjectId-3>",
	"title": "Intro to UI Router",
	"link": "<link to webinar page / streaming page>",
	"description": "A first meeting in which we will talk about how we manage client-side routing in SPAs",
	"addedBy": "<ObjectId-00>",
	"team": "<ObjectId-1>",
	"users": [
		{ 
			"userId": "<ObjectId-00>",
			"RSVP": "yes"
		},
		{ 
			"userId": "<ObjectId-01>",
			"RSVP": "maybe"
		}
	],
	"dateAdded": "<date-3>",
	"dateEvent": "<date-4>"	
}
```
