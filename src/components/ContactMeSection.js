import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  // useEffect(() => {
  //   const { type, message } = response;
  //   console.log(response);
  //   onOpen(type, message);
  // }, [response]);

  const width = useBreakpointValue(
    {
      base: "620px",
      md: "850px",
      lg: "950px",
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: "md",
    }
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },

    // Form submission
    onSubmit: (values) => {
      // submitting the form
      console.log(submit("localhost:3000/#contact-me", values));
      console.log(response);
      // destructure the response object
      const { type, message } = response;
      // reset the form if state is successful
      if (type === "success") {
        formik.resetForm();
      }
      // else return either success or error
      onOpen(type, message);
    },

    // validating form
    validationSchema: Yup.object({
      firstName: Yup.string().required("name is required!"),
      email: Yup.string()
        .required("email is required!")
        .email("Invalid email address"),
      comment: Yup.string()
        .required("comment is required!")
        .min(15, "Must be at least 15 characters"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      // py={2}
      spacing={8}
      id="contactme-section"
    >
      <VStack
        width={width}
        // maxWidth={width}
        // margin="0 auto"
        p={24}
        alignItems="flex-start"
      >
        <Heading as="h2" ml="24px">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  formik.touched.firstName ? formik.errors.firstName : null
                }
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email ? formik.errors.email : null}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option>Freelance project proposal</option>
                  <option>Open source consultancy session</option>
                  <option>Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.comment ? formik.errors.comment : null
                }
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="type something..."
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
                loadingText="Submitting"
                // variant="outline"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
