import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlusCircle, FaTicketAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to EventMaster
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your ultimate platform for managing and organizing events effortlessly.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/event-management.png" alt="Event Management" />
        </Box>
        <Button colorScheme="teal" size="lg" leftIcon={<FaCalendarAlt />}>
          View Events
        </Button>
        <Button colorScheme="blue" size="lg" leftIcon={<FaPlusCircle />} onClick={() => navigate('/create-event')}>
          Create New Event
        </Button>
        <Button colorScheme="purple" size="lg" leftIcon={<FaTicketAlt />} onClick={() => navigate('/book-ticket')}>
          Book Tickets
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;