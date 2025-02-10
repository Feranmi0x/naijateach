import { Datagrid, List, TextField } from "react-admin"

export const HsDicList = () => {
return (
<List>
<Datagrid rowClick="edit">
<TextField source="id" />
<TextField source="word" />
<TextField source="both" />
<TextField source="meaning" />
<TextField source="synonyms" />
<TextField source="homonyms" />
<TextField source="audio" />
</Datagrid>
</List>
);
};