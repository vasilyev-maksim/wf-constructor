import {CheckboxListPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/CheckboxListPreviewTemplate";
import {FreeTextPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/FreeTextPreviewTemplate";
import {RadioButtonListPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/RadioButtonListPreviewTemplate";
import {TextStringPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/TextStringPreviewTemplate";
import {TypeSelectionPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/TypeSelectionPreviewTemplate";
import {AssetSelectionPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/AssetSelectionPreviewTemplate";
import {TextStringFormTemplate} from "./smart/custom_field_editor/form_templates/TextStringFormTemplate";
import {FreeTextFormTemplate} from "./smart/custom_field_editor/form_templates/FreeTextFormTemplate";
import {TypeSelectionFormTemplate} from "./smart/custom_field_editor/form_templates/TypeSelectionFormTemplate";
import {AssetSelectionFormTemplate} from "./smart/custom_field_editor/form_templates/AssetSelectionFormTemplate";
import {RadioButtonListFormTemplate} from "./smart/custom_field_editor/form_templates/RadioButtonListFormTemplate";
import {CheckboxListFormTemplate} from "./smart/custom_field_editor/form_templates/CheckboxListFormTemplate";

export const CUSTOM_FIELD_TYPE_IDS = {
    FREE_TEXT: 'TXT',
    TYPE_SELECTION: 'DRP',
    ASSET_SELECTION: 'LNK',
    RADIO_BUTTON_LIST: 'RAD',
    CHECKBOX_LIST: 'CKB',
    TEXT_STRING: 'STR',
};

export const CUSTOM_FIELD_TYPES = {
    [CUSTOM_FIELD_TYPE_IDS.FREE_TEXT]: {
        id: CUSTOM_FIELD_TYPE_IDS.FREE_TEXT,
        name: 'Free text',
        formTemplate: FreeTextFormTemplate,
        previewTemplate: FreeTextPreviewTemplate,
        dataProcessor: (data) => ({
            label: (data && data.label) || ""
        })
    },
    [CUSTOM_FIELD_TYPE_IDS.TYPE_SELECTION]: {
        id: CUSTOM_FIELD_TYPE_IDS.TYPE_SELECTION,
        name: 'Type selection',
        formTemplate: TypeSelectionFormTemplate,
        previewTemplate: TypeSelectionPreviewTemplate,
        dataProcessor: (data) => ({
            label: (data && data.label) || "",
            items: (data && data.items) || []
        })
    },
    [CUSTOM_FIELD_TYPE_IDS.ASSET_SELECTION]: {
        id: CUSTOM_FIELD_TYPE_IDS.ASSET_SELECTION,
        name: 'Asset selection',
        formTemplate: AssetSelectionFormTemplate,
        previewTemplate: AssetSelectionPreviewTemplate,
        dataProcessor: (data) => ({
            label: (data && data.label) || ""
        })
    },
    [CUSTOM_FIELD_TYPE_IDS.RADIO_BUTTON_LIST]: {
        id: CUSTOM_FIELD_TYPE_IDS.RADIO_BUTTON_LIST,
        name: 'Radio button list',
        formTemplate: RadioButtonListFormTemplate,
        previewTemplate: RadioButtonListPreviewTemplate,
        dataProcessor: (data) => ({
            label: (data && data.label) || "",
            items: (data && data.items) || []
        })
    },
    [CUSTOM_FIELD_TYPE_IDS.TEXT_STRING]: {
        id: CUSTOM_FIELD_TYPE_IDS.TEXT_STRING,
        name: 'Text string',
        formTemplate: TextStringFormTemplate,
        previewTemplate: TextStringPreviewTemplate,
        dataProcessor: (data) => ({
            label: (data && data.label) || ""
        })
    },
    [CUSTOM_FIELD_TYPE_IDS.CHECKBOX_LIST]: {
        id: CUSTOM_FIELD_TYPE_IDS.CHECKBOX_LIST,
        name: 'Checkbox list',
        formTemplate: CheckboxListFormTemplate,
        previewTemplate: CheckboxListPreviewTemplate,
        dataProcessor: (data) => ({
            label: (data && data.label) || "",
            items: (data && data.items) || []
        })
    },
};

export const DEFAULT_TASK_AF_MODE = true;
export const DEFAULT_TASK_NAME = '';
export const DEFAULT_TASK_STATUS_ID = '1';

export const DEFAULT_CUSTOM_FIELD_LABEL = '';