// Home page 
import { Button, Center, Container, Group, Space, Stepper } from "@mantine/core";
import { Question } from "../components/question";
import { isNotEmpty, useForm } from "@mantine/form";
import { useState } from "react";

export function Home() {
  const [active, setActive] = useState(0);

  const questions = [
    {
      "key": "who",
      "question": "who is this?",
      "choices": ["rose", "glo"],
      "answer": ""
    },
    {
      "key": "car",
      "question": "do you have access to a car?",
      "choices": ["yes", "no"],
      "answer": ""
    },
    {
      "key": "time",
      "question": "how much time should it take?",
      "choices": ["15 minutes", "30 minutes", "1 hour", "many hours"],
      "answer": ""
    }
  ];

  const form = useForm({
    mode: "uncontrolled",
    initialValues: questions.map((question) => ({
      [question.key]: ""
    })),
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }

      return current < questions.length ? current + 1 : current;
    });

  const prevStep = () => setActive(
    (current) => (current > 0 ? current - 1 : current)
  );

  return (
    <Container size="xl">
        <Stepper 
          active={active}
          iconSize={25}
        >
          { questions.map((question) => (
            <Stepper.Step key={question.key}>
              <Question
                qkey={question.key}
                question={question.question}
                choices={question.choices}
                answer={question.answer}
                form={form} />
            </Stepper.Step>
          )) }

          <Stepper.Completed>
            Completed
          </Stepper.Completed>
        </Stepper>

      <Space h="xl" />

      { active < questions.length ? (
        <Center>
          <Group>
            <Button variant="default" disabled={active == 0} onClick={prevStep}>Back</Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </Center>
      ) : null}
    </Container>
  );
}
