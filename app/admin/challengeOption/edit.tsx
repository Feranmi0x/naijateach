import { BooleanField, Edit, ReferenceInput, required, SimpleForm, TextInput } from "react-admin"

export const ChallengeOptionEdit = () => {
return (
  <Edit>
    <SimpleForm>
        <TextInput 
        source="text" 
        validate={[required()]} 
        label="Text"/>
        <BooleanField 
        source="correct" 
        label="Correct option"
        />
        <ReferenceInput 
        source="challengeId" 
        reference="challenges"
        />
        <TextInput 
        source="imageSrc"
        label="Image URL"
        />
        <TextInput 
        source="audioSrc" 
        label="Audio URL"
        />
    </SimpleForm>
  </Edit>
  );
};