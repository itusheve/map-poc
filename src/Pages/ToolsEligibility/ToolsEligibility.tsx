

import { useTranslation } from 'react-i18next';

export function ToolsEligibility() {
    const {t} = useTranslation();
    const { i18n } = useTranslation();

    return <div className="grid justify-items-center w-[100dvw]">
        <div>
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('he')}>Hebrew</button>
        </div>
        Tools Eligibility
        <h1>{t('Test')}</h1>
        {i18n.language}
    </div>
}