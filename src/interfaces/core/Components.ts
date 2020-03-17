import { Article } from "@/interfaces/components/Article";
import { Button } from "@/interfaces/components/Button";
import { Grid } from "@/interfaces/components/Grid";
import { Tabs } from "@/interfaces/components/Tabs";
import { Text } from "@/interfaces/components/Text";
import { Form } from "@/interfaces/components/Form";
import { CheckboxInput } from "@/interfaces/components/Form/CheckboxInput";
import { FileInput } from "@/interfaces/components/Form/FileInput";
import { NumberInput } from "@/interfaces/components/Form/NumberInput";
import { PasswordInput } from "@/interfaces/components/Form/PasswordInput";
import { RadioInput } from "@/interfaces/components/Form/RadioInput";
import { SelectInput } from "@/interfaces/components/Form/SelectInput";
import { TextareaInput } from "@/interfaces/components/Form/TextareaInput";
import { TextInput } from "@/interfaces/components/Form/TextInput";
import { ToggleInput } from "@/interfaces/components/Form/ToggleInput";

export type Component = Article
    | Button
    | Grid
    | Tabs
    | Text
    | Form;

export type FormComponent = CheckboxInput
    | FileInput
    | NumberInput
    | PasswordInput
    | RadioInput
    | SelectInput
    | TextareaInput
    | TextInput
    | ToggleInput;
