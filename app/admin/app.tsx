"use client";

import { Admin, Resource } from "react-admin"; 
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";

import { UnitList } from "./unit/list";
import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";

import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";

import { ChallengeCreate } from "./challenge/create";
import { ChallengeList } from "./challenge/list";
import { ChallengeEdit } from "./challenge/edit";

import { ChallengeOptionList } from "./challengeOption/list";
import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";

import { DicCreate } from "./yr/create";
import { DicEdit } from "./yr/edit";
import { DicList } from "./yr/list";

import { IgDicList } from "./ig/list";
import { IgDicCreate } from "./ig/create";
import { IgDicEdit } from "./ig/edit";

import { HsDicList } from "./hs/list";
import { HsDicCreate } from "./hs/create";
import { HsDicEdit } from "./hs/edit";

import { PgDicList } from "./pgdic/list";
import { PgDicCreate } from "./pgdic/create";
import { PgDicEdit } from "./pgdic/edit";

import { HsnList } from "./hsn/list";
import { HsnCreate } from "./hsn/create";
import { HsnEdit } from "./hsn/edit";

import { YrnEdit } from "./yrn/edit";
import { YrnCreate } from "./yrn/create";
import { YrnList } from "./yrn/list";
import { IgnList } from "./ign/list";
import { IgnCreate } from "./ign/create";
import { IgnEdit } from "./ign/edit";

const dataProvider = simpleRestProvider("/api");

const App = () => {
return (
    <Admin dataProvider={dataProvider}>
        <Resource
        name="hsnumbers" 
        list={HsnList} 
        create={HsnCreate}
        edit={HsnEdit}
        recordRepresentation="title"
        />
        <Resource
        name="yrnumbers" 
        list={YrnList} 
        create={YrnCreate}
        edit={YrnEdit}
        recordRepresentation="title"
        />
        <Resource
        name="ignumbers" 
        list={IgnList} 
        create={IgnCreate}
        edit={IgnEdit}
        recordRepresentation="title"
        />
        <Resource
        name="dict" 
        list={DicList} 
        create={DicCreate}
        edit={DicEdit}
        recordRepresentation="title"
        />
        <Resource
        name="pgdict" 
        list={PgDicList} 
        create={PgDicCreate}
        edit={PgDicEdit}
        recordRepresentation="title"
        />
        <Resource
        name="hsdict" 
        list={HsDicList} 
        create={HsDicCreate}
        edit={HsDicEdit}
        recordRepresentation="title"
        />
        <Resource
        name="igdict" 
        list={IgDicList} 
        create={IgDicCreate}
        edit={IgDicEdit}
        recordRepresentation="title"
        />
        <Resource
        name="courses" 
        list={CourseList} 
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation="title"
        />
        <Resource
        name="units" 
        list={UnitList} 
        create={UnitCreate}
        edit={UnitEdit}
        recordRepresentation="title"
        />
        <Resource
        name="lessons" 
        list={LessonList} 
        create={LessonCreate}
        edit={LessonEdit}
        recordRepresentation="title"
        />
        <Resource
        name="challenges" 
        list={ChallengeList} 
        create={ChallengeCreate}
        edit={ChallengeEdit}
        recordRepresentation="question"
        />
        <Resource
        name="challengeOptions" 
        list={ChallengeOptionList} 
        create={ChallengeOptionCreate}
        edit={ChallengeOptionEdit}
        recordRepresentation="text"
        options={{label: "Challenge Options"}}
        />
    </Admin>
   )
};

export default App;