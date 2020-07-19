I've used Kafka in several instances to supplement existing JMS implementations. 
In these instances, JMS was being used as both a message broker and a streaming
event framework. Utilizing Kafka made sense to take over as the streaming
framework and allow JMS to focus on message distribution into and out of the
Kafka environment. This lowered the overhead cost of the JMS implementation by 
reducing message duplication, and provided better support for message processing 
within the data stream.