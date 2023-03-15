export interface TranslationResponse {
    data: {
        translations: {
            translatedText: string;
            detectedSourceLanguage: string;
        }[];
    };
}
