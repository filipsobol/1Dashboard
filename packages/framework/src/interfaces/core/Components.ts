import { Article } from "@framework/interfaces/components/Article";
import { Button } from "@framework/interfaces/components/Button";
import { Grid } from "@framework/interfaces/components/Grid";
import { Tabs } from "@framework/interfaces/components/Tabs";
import { Text } from "@framework/interfaces/components/Text";
import { Form } from "@framework/interfaces/components/Form";
import { CheckboxInput } from "@framework/interfaces/components/Form/CheckboxInput";
import { FileInput } from "@framework/interfaces/components/Form/FileInput";
import { NumberInput } from "@framework/interfaces/components/Form/NumberInput";
import { MultiSelectInput } from "@framework/interfaces/components/Form/MultiSelectInput";
import { PasswordInput } from "@framework/interfaces/components/Form/PasswordInput";
import { RadioInput } from "@framework/interfaces/components/Form/RadioInput";
import { SelectInput } from "@framework/interfaces/components/Form/SelectInput";
import { TextareaInput } from "@framework/interfaces/components/Form/TextareaInput";
import { TextInput } from "@framework/interfaces/components/Form/TextInput";
import { ToggleInput } from "@framework/interfaces/components/Form/ToggleInput";

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
