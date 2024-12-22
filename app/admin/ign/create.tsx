import { Create, required, SimpleForm, TextInput } from "react-admin"

export const IgnCreate = () => {
return (
  <Create>
     <SimpleForm>
    <TextInput 
    source="english" 
    validate={[required()]} 
    label="english"/>
    <TextInput 
    source="igbo" 
    validate={[required()]} 
    label="igbo"/>
    <TextInput 
    source="audioPath" 
    validate={[required()]} 
    label="audio"/>
    </SimpleForm>
  </Create>
  );
};