const STORAGE_KEYS = {
    language: 'quoteStudioLanguage',
    favorites: 'quoteStudioFavorites',
    history: 'quoteStudioHistory'
};

const categories = ['all', 'inspiration', 'courage', 'creativity', 'humor', 'productivity', 'marketing', 'reflection'];

const translations = {
    en: {
        appName: 'Random Quote',
        appSubtitle: 'Creative Studio',
        displayControls: 'Display controls',
        eyebrow: 'Quotes, prompts, and ideas',
        title: 'A quote generator for creative momentum.',
        intro: 'Pull a random quote, shape it through a mood, save favorites, and turn inspiration into a practical reflection prompt.',
        sourceReady: 'Hybrid quote engine',
        sourceCopy: 'Uses DummyJSON first, tries ZenQuotes when useful, and always falls back to local inspiration.',
        sourceDummy: 'DummyJSON quote',
        sourceZen: 'ZenQuotes quote',
        sourceLocal: 'Offline/local inspiration',
        sourceUnavailable: 'APIs unavailable',
        moodTitle: 'Choose a mood',
        moodAria: 'Quote mood filters',
        allMood: 'All moods',
        quoteActions: 'Quote actions',
        loadingQuote: 'Loading your first quote...',
        newQuote: 'New quote',
        newPrompt: 'New prompt',
        copyQuote: 'Copy',
        saveFavorite: 'Save',
        savedFavorite: 'Saved',
        shareQuote: 'Share',
        promptTitle: 'Creative prompt',
        promptLoading: 'Generate a quote to unlock a reflection prompt.',
        promptHintLabel: 'Use it for',
        promptHint: 'journaling, content ideas, hooks, or campaign angles.',
        favoritesLabel: 'Favorites',
        favoritesTitle: 'Saved inspiration',
        clearFavorites: 'Clear',
        favoritesEmpty: 'Save quotes you want to revisit.',
        historyLabel: 'History',
        historyTitle: 'Recent pulls',
        historyEmpty: 'Your latest quotes will appear here.',
        copied: 'Quote copied.',
        favoriteAdded: 'Saved to favorites.',
        favoriteRemoved: 'Removed from favorites.',
        favoritesCleared: 'Favorites cleared.',
        fallbackUsed: 'The API was unavailable, so I used local inspiration.',
        categories: {
            all: 'All',
            inspiration: 'Inspiration',
            courage: 'Courage',
            creativity: 'Creativity',
            humor: 'Humor',
            productivity: 'Productivity',
            marketing: 'Marketing',
            reflection: 'Reflection'
        }
    },
    es: {
        appName: 'Random Quote',
        appSubtitle: 'Estudio creativo',
        displayControls: 'Controles de visualización',
        eyebrow: 'Frases, prompts e ideas',
        title: 'Un generador de frases para activar la creatividad.',
        intro: 'Pedí una frase al azar, filtrala por mood, guardá favoritas y convertí la inspiración en un prompt práctico.',
        sourceReady: 'Motor híbrido de frases',
        sourceCopy: 'Usa DummyJSON primero, prueba ZenQuotes cuando conviene y siempre tiene inspiración local de respaldo.',
        sourceDummy: 'Frase de DummyJSON',
        sourceZen: 'Frase de ZenQuotes',
        sourceLocal: 'Inspiración local',
        sourceUnavailable: 'APIs no disponibles',
        moodTitle: 'Elegí un mood',
        moodAria: 'Filtros de mood para frases',
        allMood: 'Todos los moods',
        quoteActions: 'Acciones de la frase',
        loadingQuote: 'Cargando tu primera frase...',
        newQuote: 'Nueva frase',
        newPrompt: 'Nuevo prompt',
        copyQuote: 'Copiar',
        saveFavorite: 'Guardar',
        savedFavorite: 'Guardada',
        shareQuote: 'Compartir',
        promptTitle: 'Prompt creativo',
        promptLoading: 'Generá una frase para desbloquear un prompt de reflexión.',
        promptHintLabel: 'Usalo para',
        promptHint: 'journaling, ideas de contenido, hooks o ángulos de campaña.',
        favoritesLabel: 'Favoritas',
        favoritesTitle: 'Inspiración guardada',
        clearFavorites: 'Limpiar',
        favoritesEmpty: 'Guardá frases para volver a ellas.',
        historyLabel: 'Historial',
        historyTitle: 'Últimas frases',
        historyEmpty: 'Tus frases recientes aparecerán acá.',
        copied: 'Frase copiada.',
        favoriteAdded: 'Guardada en favoritas.',
        favoriteRemoved: 'Eliminada de favoritas.',
        favoritesCleared: 'Favoritas eliminadas.',
        fallbackUsed: 'La API no respondió, así que usé inspiración local.',
        categories: {
            all: 'Todas',
            inspiration: 'Inspiración',
            courage: 'Coraje',
            creativity: 'Creatividad',
            humor: 'Humor',
            productivity: 'Productividad',
            marketing: 'Marketing',
            reflection: 'Reflexión'
        }
    }
};

const fallbackQuotes = {
    en: [
        { text: 'Make the first version honest, then make the second version beautiful.', author: 'Creative Studio', category: 'creativity' },
        { text: 'A clear message beats a clever one when people need to act.', author: 'Creative Studio', category: 'marketing' },
        { text: 'Momentum is built by finishing small promises to yourself.', author: 'Creative Studio', category: 'productivity' },
        { text: 'Courage often looks like sending the draft before it feels perfect.', author: 'Creative Studio', category: 'courage' },
        { text: 'The idea is not hiding. It is waiting for a better question.', author: 'Creative Studio', category: 'reflection' },
        { text: 'If the concept feels flat, change the point of view.', author: 'Creative Studio', category: 'creativity' },
        { text: 'A good hook opens a loop. A good story closes it with feeling.', author: 'Creative Studio', category: 'marketing' },
        { text: 'Some days the breakthrough is simply staying in the room with the work.', author: 'Creative Studio', category: 'inspiration' },
        { text: 'Humor is a shortcut to attention, but honesty is what keeps it.', author: 'Creative Studio', category: 'humor' },
        { text: 'Systems make creativity less fragile.', author: 'Creative Studio', category: 'productivity' }
    ],
    es: [
        { text: 'Hacé que la primera versión sea honesta; después hacé que la segunda sea hermosa.', author: 'Creative Studio', category: 'creativity' },
        { text: 'Un mensaje claro gana contra uno ingenioso cuando la gente necesita actuar.', author: 'Creative Studio', category: 'marketing' },
        { text: 'El impulso se construye cumpliendo pequeñas promesas con vos mismo.', author: 'Creative Studio', category: 'productivity' },
        { text: 'Muchas veces el coraje se parece a enviar el borrador antes de que esté perfecto.', author: 'Creative Studio', category: 'courage' },
        { text: 'La idea no está escondida. Está esperando una mejor pregunta.', author: 'Creative Studio', category: 'reflection' },
        { text: 'Si el concepto se siente plano, cambiá el punto de vista.', author: 'Creative Studio', category: 'creativity' },
        { text: 'Un buen hook abre un loop. Una buena historia lo cierra con emoción.', author: 'Creative Studio', category: 'marketing' },
        { text: 'Algunos días el avance es simplemente quedarse en la mesa con el trabajo.', author: 'Creative Studio', category: 'inspiration' },
        { text: 'El humor es un atajo a la atención, pero la honestidad es lo que la sostiene.', author: 'Creative Studio', category: 'humor' },
        { text: 'Los sistemas hacen que la creatividad sea menos frágil.', author: 'Creative Studio', category: 'productivity' }
    ]
};

const creativePrompts = {
    en: {
        all: [
            'Turn this quote into one concrete action you can finish in 20 minutes.',
            'Write a three-line caption inspired by this idea.'
        ],
        inspiration: ['What would this quote look like as a morning routine?', 'Use this idea to write a note to your future self.'],
        courage: ['Name one decision this quote asks you to stop delaying.', 'Write the brave version of your next step.'],
        creativity: ['Transform this quote into a visual campaign concept.', 'List five unexpected metaphors connected to this quote.'],
        humor: ['Rewrite this quote as a witty social post without losing the point.', 'Find the absurd truth inside this quote.'],
        productivity: ['Create a tiny checklist from this quote.', 'Turn this quote into a rule for your workday.'],
        marketing: ['Turn this quote into a hook for a landing page.', 'Write a short ad angle inspired by this quote.'],
        reflection: ['What part of this quote feels uncomfortable, and why?', 'Write the question this quote is really asking you.']
    },
    es: {
        all: [
            'Convertí esta frase en una acción concreta que puedas terminar en 20 minutos.',
            'Escribí un caption de tres líneas inspirado en esta idea.'
        ],
        inspiration: ['¿Cómo se vería esta frase como rutina de mañana?', 'Usá esta idea para escribirle una nota a tu yo futuro.'],
        courage: ['Nombrá una decisión que esta frase te pide dejar de postergar.', 'Escribí la versión valiente de tu próximo paso.'],
        creativity: ['Transformá esta frase en un concepto visual de campaña.', 'Listá cinco metáforas inesperadas conectadas con esta frase.'],
        humor: ['Reescribí esta frase como post ingenioso sin perder la idea.', 'Encontrá la verdad absurda dentro de esta frase.'],
        productivity: ['Creá una mini checklist a partir de esta frase.', 'Convertí esta frase en una regla para tu día de trabajo.'],
        marketing: ['Convertí esta frase en un hook para una landing page.', 'Escribí un ángulo corto de anuncio inspirado en esta frase.'],
        reflection: ['¿Qué parte de esta frase incomoda, y por qué?', 'Escribí la pregunta que esta frase realmente te está haciendo.']
    }
};

const elements = {
    languageToggle: document.querySelector('#language-toggle'),
    categoryFilters: document.querySelector('#category-filters'),
    sourceLabel: document.querySelector('#source-label'),
    sourceTitle: document.querySelector('#source-title'),
    sourceCopy: document.querySelector('#source-copy'),
    categoryPill: document.querySelector('#category-pill'),
    quoteSource: document.querySelector('#quote-source'),
    quoteText: document.querySelector('#quote-text'),
    quoteAuthor: document.querySelector('#quote-author'),
    newQuote: document.querySelector('#new-quote'),
    promptButton: document.querySelector('#prompt-button'),
    copyQuote: document.querySelector('#copy-quote'),
    saveFavorite: document.querySelector('#save-favorite'),
    shareQuote: document.querySelector('#share-quote'),
    creativePrompt: document.querySelector('#creative-prompt'),
    favoritesList: document.querySelector('#favorites-list'),
    favoritesEmpty: document.querySelector('#favorites-empty'),
    historyList: document.querySelector('#history-list'),
    historyEmpty: document.querySelector('#history-empty'),
    clearFavorites: document.querySelector('#clear-favorites'),
    toast: document.querySelector('#toast')
};

let currentLanguage = getStoredValue(STORAGE_KEYS.language, 'en', ['en', 'es']);
let currentCategory = 'all';
let currentQuote = null;
let favorites = readStoredArray(STORAGE_KEYS.favorites);
let history = readStoredArray(STORAGE_KEYS.history);
let toastTimeout = null;

function getStoredValue(key, fallback, allowedValues) {
    const storedValue = localStorage.getItem(key);
    return allowedValues.includes(storedValue) ? storedValue : fallback;
}

function readStoredArray(key) {
    try {
        const value = JSON.parse(localStorage.getItem(key) || '[]');
        return Array.isArray(value) ? value : [];
    } catch {
        return [];
    }
}

function writeStoredArray(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function t(key) {
    return key.split('.').reduce((value, part) => value && value[part], translations[currentLanguage]) || key;
}

function setLanguage(language) {
    currentLanguage = language === 'es' ? 'es' : 'en';
    document.documentElement.lang = currentLanguage;
    localStorage.setItem(STORAGE_KEYS.language, currentLanguage);
    elements.languageToggle.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    elements.languageToggle.setAttribute('aria-label', currentLanguage === 'en' ? 'Cambiar idioma a español' : 'Change language to English');

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
        element.setAttribute('aria-label', t(element.dataset.i18nAria));
    });

    document.title = currentLanguage === 'en' ? 'Random Quote Creative Studio' : 'Random Quote Estudio Creativo';
    renderCategories();
    renderQuote(currentQuote, false);
    renderCreativePrompt(false);
    renderFavorites();
    renderHistory();
}

async function fetchDummyQuote() {
    const response = await fetchWithTimeout('https://dummyjson.com/quotes/random');

    if (!response.ok) {
        throw new Error('DummyJSON unavailable');
    }

    const data = await response.json();
    return normalizeQuote({
        text: data.quote,
        author: data.author || 'Unknown',
        category: inferCategory(data.quote),
        source: 'DummyJSON'
    });
}

async function fetchZenQuote() {
    const response = await fetchWithTimeout('https://zenquotes.io/api/random');

    if (!response.ok) {
        throw new Error('ZenQuotes unavailable');
    }

    const data = await response.json();
    const quote = Array.isArray(data) ? data[0] : null;

    if (!quote || !quote.q) {
        throw new Error('ZenQuotes returned an invalid quote');
    }

    return normalizeQuote({
        text: quote.q,
        author: quote.a || 'Unknown',
        category: inferCategory(quote.q),
        source: 'ZenQuotes'
    });
}

function getFallbackQuote(category = currentCategory, language = currentLanguage) {
    const pool = fallbackQuotes[language];
    const filteredPool = category === 'all' ? pool : pool.filter((quote) => quote.category === category);
    const sourcePool = avoidRecentRepeats(filteredPool.length ? filteredPool : pool);
    return normalizeQuote({
        ...pickRandom(sourcePool),
        source: 'Local'
    });
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 4500) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
        return await fetch(url, {
            ...options,
            signal: controller.signal
        });
    } finally {
        clearTimeout(timeout);
    }
}

function avoidRecentRepeats(pool) {
    const recentIds = new Set(history.slice(0, 4).map((quote) => quote.id));
    const freshPool = pool.filter((quote) => {
        const quoteId = normalizeQuote({ ...quote, source: 'Local' }).id;
        return !recentIds.has(quoteId);
    });

    return freshPool.length ? freshPool : pool;
}

function getCreativePrompt(category = currentCategory, language = currentLanguage) {
    const promptGroups = creativePrompts[language];
    const pool = promptGroups[category] || promptGroups.all;
    return pickRandom(pool);
}

function normalizeQuote(quote) {
    return {
        id: `${quote.source}-${quote.text}`.replace(/\s+/g, '-').toLowerCase(),
        text: quote.text,
        author: quote.author,
        category: categories.includes(quote.category) ? quote.category : 'inspiration',
        source: quote.source
    };
}

function inferCategory(text = '') {
    const value = text.toLowerCase();

    if (/(courage|fear|brave|risk|stand|speak)/.test(value)) return 'courage';
    if (/(create|art|idea|imagination|design|dream)/.test(value)) return 'creativity';
    if (/(laugh|smile|fun|fool|joke|humor)/.test(value)) return 'humor';
    if (/(work|success|goal|focus|discipline|action)/.test(value)) return 'productivity';
    if (/(sell|market|brand|message|people|value)/.test(value)) return 'marketing';
    if (/(truth|life|mind|self|think|wisdom)/.test(value)) return 'reflection';
    return 'inspiration';
}

function pickRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}

async function getRandomQuote() {
    setLoading(true);

    try {
        const quote = await fetchDummyQuote();
        return quote;
    } catch (dummyError) {
        try {
            const quote = await fetchZenQuote();
            return quote;
        } catch (zenError) {
            showToast(t('fallbackUsed'));
            return getFallbackQuote();
        }
    } finally {
        setLoading(false);
    }
}

async function updateQuote() {
    const quote = await getRandomQuote();
    const matchedQuote = currentCategory === 'all' || quote.category === currentCategory
        ? quote
        : getFallbackQuote();

    renderQuote(matchedQuote, true);
    renderCreativePrompt(true);
    addToHistory(matchedQuote);
}

function renderQuote(quote, announce = true) {
    if (!quote) return;

    currentQuote = quote;
    elements.quoteText.textContent = `"${quote.text}"`;
    elements.quoteAuthor.textContent = `- ${quote.author}`;
    elements.categoryPill.textContent = t(`categories.${quote.category}`);
    elements.quoteSource.textContent = quote.source;
    elements.shareQuote.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;
    elements.saveFavorite.textContent = isFavorite(quote) ? t('savedFavorite') : t('saveFavorite');
    updateSourceState(quote.source);

    if (announce) {
        elements.quoteText.focus?.();
    }
}

function updateSourceState(source) {
    if (source === 'DummyJSON') {
        elements.sourceLabel.textContent = 'API';
        elements.sourceTitle.textContent = t('sourceDummy');
    } else if (source === 'ZenQuotes') {
        elements.sourceLabel.textContent = 'API';
        elements.sourceTitle.textContent = t('sourceZen');
    } else {
        elements.sourceLabel.textContent = 'Local';
        elements.sourceTitle.textContent = t('sourceLocal');
    }

    elements.sourceCopy.textContent = t('sourceCopy');
}

function renderCreativePrompt(shouldRefresh = true) {
    if (!currentQuote) return;

    if (shouldRefresh || !elements.creativePrompt.dataset.promptCategory) {
        elements.creativePrompt.dataset.promptCategory = currentCategory;
        elements.creativePrompt.textContent = getCreativePrompt();
    }
}

function saveFavorite(quote = currentQuote) {
    if (!quote) return;

    if (isFavorite(quote)) {
        favorites = favorites.filter((item) => item.id !== quote.id);
        showToast(t('favoriteRemoved'));
    } else {
        favorites = [quote, ...favorites].slice(0, 20);
        showToast(t('favoriteAdded'));
    }

    writeStoredArray(STORAGE_KEYS.favorites, favorites);
    elements.saveFavorite.textContent = isFavorite(quote) ? t('savedFavorite') : t('saveFavorite');
    renderFavorites();
}

function isFavorite(quote) {
    return favorites.some((item) => item.id === quote.id);
}

function addToHistory(quote) {
    history = [quote, ...history.filter((item) => item.id !== quote.id)].slice(0, 8);
    writeStoredArray(STORAGE_KEYS.history, history);
    renderHistory();
}

function renderFavorites() {
    renderQuoteList(elements.favoritesList, favorites, true);
    elements.favoritesEmpty.classList.toggle('is-hidden', favorites.length > 0);
}

function renderHistory() {
    renderQuoteList(elements.historyList, history, false);
    elements.historyEmpty.classList.toggle('is-hidden', history.length > 0);
}

function renderQuoteList(container, quotes, canRemove) {
    container.innerHTML = '';

    quotes.forEach((quote) => {
        const item = document.createElement('li');
        const text = document.createElement('p');
        const meta = document.createElement('small');
        const actions = document.createElement('div');
        const useButton = document.createElement('button');

        text.textContent = `"${quote.text}"`;
        meta.textContent = `${quote.author} · ${quote.source} · ${t(`categories.${quote.category}`)}`;
        actions.className = 'list-actions';
        useButton.className = 'mini-button';
        useButton.type = 'button';
        useButton.textContent = currentLanguage === 'en' ? 'Use' : 'Usar';
        useButton.addEventListener('click', () => {
            renderQuote(quote);
            renderCreativePrompt(true);
        });
        actions.append(useButton);

        if (canRemove) {
            const removeButton = document.createElement('button');
            removeButton.className = 'mini-button';
            removeButton.type = 'button';
            removeButton.textContent = currentLanguage === 'en' ? 'Remove' : 'Quitar';
            removeButton.addEventListener('click', () => {
                favorites = favorites.filter((item) => item.id !== quote.id);
                writeStoredArray(STORAGE_KEYS.favorites, favorites);
                renderFavorites();
                renderQuote(currentQuote, false);
                showToast(t('favoriteRemoved'));
            });
            actions.append(removeButton);
        }

        item.append(text, meta, actions);
        container.append(item);
    });
}

function renderCategories() {
    elements.categoryFilters.innerHTML = '';

    categories.forEach((category) => {
        const button = document.createElement('button');
        button.className = 'mood-button';
        button.type = 'button';
        button.textContent = t(`categories.${category}`);
        button.classList.toggle('is-active', currentCategory === category);
        button.addEventListener('click', () => {
            currentCategory = category;
            renderCategories();
            if (currentQuote && currentCategory !== 'all' && currentQuote.category !== currentCategory) {
                renderQuote(getFallbackQuote(), true);
                renderCreativePrompt(true);
            } else {
                renderQuote(currentQuote, false);
                renderCreativePrompt(true);
            }
        });
        elements.categoryFilters.append(button);
    });
}

async function copyCurrentQuote() {
    if (!currentQuote) return;

    const value = `"${currentQuote.text}" - ${currentQuote.author}`;

    try {
        await navigator.clipboard.writeText(value);
    } catch {
        const textArea = document.createElement('textarea');
        textArea.value = value;
        document.body.append(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
    }

    showToast(t('copied'));
}

function clearFavorites() {
    favorites = [];
    writeStoredArray(STORAGE_KEYS.favorites, favorites);
    renderFavorites();
    renderQuote(currentQuote, false);
    showToast(t('favoritesCleared'));
}

function setLoading(isLoading) {
    document.body.classList.toggle('is-loading', isLoading);
    elements.newQuote.disabled = isLoading;
}

function showToast(message) {
    clearTimeout(toastTimeout);
    elements.toast.textContent = message;
    elements.toast.classList.add('is-visible');
    toastTimeout = setTimeout(() => {
        elements.toast.classList.remove('is-visible');
    }, 2600);
}

elements.languageToggle.addEventListener('click', () => {
    setLanguage(currentLanguage === 'en' ? 'es' : 'en');
});
elements.newQuote.addEventListener('click', updateQuote);
elements.promptButton.addEventListener('click', () => renderCreativePrompt(true));
elements.copyQuote.addEventListener('click', copyCurrentQuote);
elements.saveFavorite.addEventListener('click', () => saveFavorite());
elements.clearFavorites.addEventListener('click', clearFavorites);

setLanguage(currentLanguage);
renderFavorites();
renderHistory();
renderQuote(getFallbackQuote(), false);
renderCreativePrompt(true);
updateQuote();
