import React, { useEffect } from 'react';
import { ArrowLeft, Milk, Box, Wind, ThermometerSun, Droplets } from 'lucide-react';
import { TRANSLATIONS } from '../translations';

const MtfSolutionsPage = ({ lang, onBack }) => {
    const t = TRANSLATIONS[lang].mtfSolutionsPage;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
                        <div className="bg-emerald-600 text-white p-2 rounded-lg">
                            <ArrowLeft size={20} />
                        </div>
                        <span className="font-bold text-slate-800 hover:text-emerald-600 transition">{t.backBtn}</span>
                    </div>
                    <div className="font-bold text-xl text-slate-800">PlutonStroy</div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&q=80&w=2000"
                        alt="Modern Dairy Farm"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-block bg-emerald-500/20 border border-emerald-500/50 px-4 py-1.5 rounded-full mb-6">
                        <span className="text-emerald-400 font-semibold uppercase tracking-wider text-sm">Equipment & Technology</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
                        {t.title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed border-l-4 border-emerald-500 pl-6">
                        {t.intro}
                    </div>
                </div>
            </section>

            {/* Detail Sections */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1: Milking */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100">
                            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <Milk size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">{t.sections[0].title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t.sections[0].text}
                            </p>
                        </div>

                        {/* Card 2: Stalls */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100">
                            <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                                <Box size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">{t.sections[1].title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t.sections[1].text}
                            </p>
                        </div>

                        {/* Card 3: Ventilation/Manure */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100">
                            <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-cyan-600">
                                <Wind size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">{t.sections[2].title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t.sections[2].text}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Footer */}
            <section className="py-20 bg-slate-900 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        {lang === 'EN' ? 'Ready to modernize your farm?' :
                            lang === 'KZ' ? 'Фермаңызды жаңғыртуға дайынсыз ба?' :
                                'Готовы модернизировать ферму?'}
                    </h2>
                    <button onClick={onBack} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition shadow-lg shadow-emerald-900/50">
                        {t.backBtn}
                    </button>
                </div>
            </section>

        </div>
    );
};

export default MtfSolutionsPage;
