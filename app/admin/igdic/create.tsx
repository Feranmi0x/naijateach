import { Create, required, SimpleForm, TextInput } from "react-admin"

export const IgDicCreate = () => {
return (
  <Create>
    <SimpleForm>
        <TextInput 
        source="word" 
        validate={[required()]} 
        label="word"/>
        <TextInput 
        source="both" 
        validate={[required()]} 
        label="word"/>
        <TextInput 
        source="meaning" 
        validate={[required()]} 
        label="meaning"/>
        <TextInput 
        source="synonyms" 
        label="synonyms"/>
        <TextInput 
        source="homonyms" 
        label="homonyms"/>
        <TextInput 
        source="audio" 
        validate={[required()]} 
        label="audio"/>
    </SimpleForm>
  </Create>
  );
};