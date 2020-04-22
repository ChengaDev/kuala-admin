import boldedAreasChartLocals from './sections/charts/BoldedAreasChart';
import completionGraphLocals from './sections/charts/CompletionGraph';
import summarySectionLocals from './sections/summary/SummarySection';

export default {
    en: {
        summary: summarySectionLocals.en,
        charts: {
            completionGraph: completionGraphLocals.en,
            boldedAreasChart: boldedAreasChartLocals.en
        },
        welcomeMessage: 'Welcome back'
    },
    he: {
        summary: summarySectionLocals.he,
        charts: {
            completionGraph: completionGraphLocals.he,
            boldedAreasChart: boldedAreasChartLocals.he
        },
        welcomeMessage: 'ברוכים הבאים'
    }
};
