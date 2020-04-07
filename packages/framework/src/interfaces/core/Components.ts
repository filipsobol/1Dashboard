import { Article } from "@components/interfaces/Article";
import { Button } from "@components/interfaces/Button";
import { Grid } from "@components/interfaces/Grid";
import { Tabs } from "@components/interfaces/Tabs";
import { Text } from "@components/interfaces/Text";
import { Form } from "@components/interfaces/Form";
import { CheckboxInput } from "@components/interfaces/Form/CheckboxInput";
import { FileInput } from "@components/interfaces/Form/FileInput";
import { NumberInput } from "@components/interfaces/Form/NumberInput";
import { MultiSelectInput } from "@components/interfaces/Form/MultiSelectInput";
import { PasswordInput } from "@components/interfaces/Form/PasswordInput";
import { RadioInput } from "@components/interfaces/Form/RadioInput";
import { SelectInput } from "@components/interfaces/Form/SelectInput";
import { TextareaInput } from "@components/interfaces/Form/TextareaInput";
import { TextInput } from "@components/interfaces/Form/TextInput";
import { ToggleInput } from "@components/interfaces/Form/ToggleInput";

export type Component = Article
    | Button
    | Grid
    | Tabs
    | Text
    | Form;

export type FormComponent = CheckboxInput
    | FileInput
    | NumberInput
    | MultiSelectInput
    | PasswordInput
    | RadioInput
    | SelectInput
    | TextareaInput
    | TextInput
    | ToggleInput;
