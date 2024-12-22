import { Edit, required, SimpleForm, TextInput } from "react-admin"

export const HsnEdit = () => {
return (
   <Edit>
    <SimpleForm>
    <TextInput 
    source="id" 
    label="Id"/>
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
    </Edit>
    );
};