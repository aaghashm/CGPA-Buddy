import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Text, Flex } from "@chakra-ui/react";

const CustomAlert = ({ isOpen, onClose, header, alertText }) => {
  // Function to render bold text with specified color and optional font size
  const renderBoldText = (text, color, fontSize) => {
    return <Text as="span" fontWeight="bold" color={color} fontSize={fontSize}>{text}</Text>;
  };

  // Function to format the alert message with specified styles
  const formatAlertText = () => {
    // Split the alertText by newline characters
    const lines = alertText.split("\n");
    return lines.map((line, index) => {
      // Check if the line contains specific keywords to be formatted
      if (line.startsWith("CGPA:") || line.startsWith("No of Arrears:") || line.startsWith("Arrear Subject Names:")) {
        // Split the line by the colon (:) character
        const parts = line.split(":");
        // If there are two parts (keyword and value), return them with the value in bold
        if (parts.length === 2) {
          let valueColor = "green"; // Default color for values
          if (line.startsWith("No of Arrears:")) {
            valueColor = "red"; // Red color for No of Arrears value
          }
          return (
            <div key={index}>
              <Text>
                {renderBoldText(parts[0], "#000", "xm")}&nbsp;:&nbsp;{renderBoldText(parts[1], valueColor)}
              </Text>
            </div>
          );
        }
      }
      // If the line doesn't contain specific keywords, render it as regular text
      return <Text key={index}>{line}</Text>;
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent borderRadius="md" maxW="80%" mx="auto" mt="auto" mb="auto">
        <ModalHeader fontWeight="bold">{header}</ModalHeader>
        <ModalBody>
          {formatAlertText()}
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Flex justify="center" align="center" w="100%">
            <Button colorScheme="green" mr="10px" w ="25%" size="sm" boxShadow="md" onClick={onClose}>OK</Button>
            <Button colorScheme="gray" mr="10px" size="sm" boxShadow="md" onClick={() => copyToClipboard(alertText)}>Copy</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomAlert;

// Function to copy text to clipboard
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((error) => {
      console.error("Error copying text to clipboard: ", error);
    });
};
