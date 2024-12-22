import { Create, required, SimpleForm, TextInput } from "react-admin"

export const YrnCreate = () => {
return (
  <Create>
     <SimpleForm>
    <TextInput 
    source="english" 
    validate={[required()]} 
    label="english"/>
    <TextInput 
    source="yoruba" 
    validate={[required()]} 
    label="yoruba"/>
    <TextInput 
    source="audioPath" 
    validate={[required()]} 
    label="audio"/>
    </SimpleForm>
  </Create>
  );
};