import { Create, required, SimpleForm, TextInput } from "react-admin"

export const HsnCreate = () => {
return (
  <Create>
     <SimpleForm>
    <TextInput 
    source="english" 
    validate={[required()]} 
    label="english"/>
    <TextInput 
    source="hausa" 
    validate={[required()]} 
    label="hausa"/>
    <TextInput 
    source="audioPath" 
    validate={[required()]} 
    label="audio"/>
    </SimpleForm>
  </Create>
  );
};