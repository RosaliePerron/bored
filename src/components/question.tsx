import { Container, Group, Radio } from "@mantine/core";


interface Props {
  qkey: string;
  question: string;
  choices: string[];
  answer: string;
  form: any;
}


export function Question({ qkey, question, choices, form }: Props) {
  return (
    <Container>
      <h1>{ question }</h1>

      <Radio.Group 
        key={qkey}
        {...form.getInputProps(qkey)}
      >
        <Group>
          {
            choices.map((choice) => (
              <Radio label={choice} value={choice} key={choice} />
            ))
          }
        </Group>
      </Radio.Group>
    </Container>
  );
}
