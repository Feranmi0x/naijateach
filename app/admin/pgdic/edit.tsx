import { Edit, required, SimpleForm, TextInput } from "react-admin"

export const PgDicEdit = () => {
return (
   <Edit>
    <SimpleForm>
    <TextInput 
    source="id" 
    label="Id"/>
    <TextInput 
    source="word" 
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
    </Edit>
    );
};