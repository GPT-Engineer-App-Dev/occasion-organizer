import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Event Created:", { eventName, eventDate, eventLocation, eventDescription });
  };

  return (
    <Container centerContent>
      <VStack spacing={6} width="100%" maxW="container.md" mt={10}>
        <Heading as="h1" size="xl">Create New Event</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="event-name" isRequired>
              <FormLabel>Event Name</FormLabel>
              <Input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            </FormControl>
            <FormControl id="event-date" isRequired>
              <FormLabel>Event Date</FormLabel>
              <Input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </FormControl>
            <FormControl id="event-location" isRequired>
              <FormLabel>Event Location</FormLabel>
              <Input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
            </FormControl>
            <FormControl id="event-description">
              <FormLabel>Event Description</FormLabel>
              <Textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
            </FormControl>
            <Button colorScheme="teal" size="lg" type="submit">Create Event</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default CreateEvent;