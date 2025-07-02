import React from 'react';
import PoultryMedicineCategories from './PoultryMedicineCategories';
import DogMedicineCard from './DogMedicineCard';
import CatMedicineCard from './CatMedicineCard';

interface MedicineGridProps {
  petType: string;
  selectedCategory?: string;
}

const MedicineGrid: React.FC<MedicineGridProps> = ({ petType, selectedCategory = 'all' }) => {
  // For birds, show categories instead of individual medicines
  if (petType === 'birds') {
    return <PoultryMedicineCategories />;
  }

  // Individual medicine data for each pet type
  const getMedicinesForPetType = () => {
    if (petType === 'dogs') {
      return [
        { id: 1, name: 'Meloxicam', description: 'Inhibits cyclooxygenase (COX), mainly COX-2, reducing inflammation, pain, and fever.', image: 'https://i.postimg.cc/Kj21YPsf/Meloxicam.png' },
        { id: 2, name: 'Ketoprofen', description: 'This vaccine reduces inflammation, pain, and fever by blocking COX enzymes and lowering prostaglandin levels in the body.', image: 'https://i.postimg.cc/1zV0nKJ1/ketofen.jpg' },
        { id: 3, name: 'Alphachymotrypsin', description: 'Alpha-chymotrypsin is an enzyme that helps reduce inflammation and swelling by breaking down proteins, aiding in tissue repair after trauma or surgery.', image: 'https://i.postimg.cc/NF2vZSxP/Picture5.png' },
        { id: 4, name: 'Carprofen', description: 'This targets COX-2 enzymes to lower prostaglandin levels, helping reduce pain, inflammation, and fever—especially after surgery or in arthritis cases.', image: 'https://i.postimg.cc/4NzxdHz2/Picture6.jpg' },
        { id: 5, name: 'Dexamethasone', description: 'Dexamethasone suppresses inflammation and immune responses by blocking cytokines and prostaglandins. It’s used to treat allergies, autoimmune diseases, and inflammation.', image: 'https://i.postimg.cc/jdrRGqGH/Picture7.png' },
        { id: 6, name: 'Prednisolone', description: 'Prednisolone reduces inflammation and immune activity by blocking prostaglandins and cytokines. It’s commonly used for allergies, asthma, and autoimmune diseases.', image: 'https://i.postimg.cc/Mp9xM7X5/Picture9.jpg' },
        { id: 7, name: 'Hydrocortisone', description: 'Hydrocortisone reduces inflammation and immune responses by blocking cytokines and prostaglandins. It is used for skin issues, allergies, and adrenal insufficiency.', image: 'https://i.postimg.cc/XvXWwrCb/Picture10.jpg' },
        { id: 8, name: 'Triamcinolone', description: 'Triamcinolone reduces inflammation and immune activity by blocking cytokines and prostaglandins. It’s effective for allergies, skin conditions, arthritis, and asthma.', image: 'https://i.postimg.cc/xd72g9vb/Picture11.png' },
        { id: 9, name: 'Drontal', description: 'Drontal is a broad-spectrum dewormer for dogs and cats. It targets tapeworms, roundworms, and hookworms by paralyzing and disrupting their metabolism.', image: 'https://i.postimg.cc/15PZvCqM/Picture13.png' },
        { id: 10, name: 'Milbemax', description: 'Milbemax is a broad-spectrum dewormer that paralyzes and kills parasites by disrupting their nerve cells and damaging their membranes, making them easy for the body to eliminate.', image: 'https://i.postimg.cc/htZWPK33/Picture14.jpg' },
        { id: 11, name: 'Panacur', description: 'Panacur contains fenbendazole, a broad-spectrum dewormer that disrupts parasite intestinal cells, causing their death. It treats roundworms, hookworms, whipworms, and some tapeworms.', image: 'https://i.postimg.cc/HLMZDHGM/Picture16.jpg' },
        { id: 12, name: 'Albenidazole', description: 'Albendazole disrupts parasite cell structure and metabolism by blocking tubulin polymerization, leading to their death. It also starves parasites by blocking glucose uptake.', image: 'https://i.postimg.cc/KjGJMM17/Picture17.jpg' },
        { id: 13, name: 'Metronidazole', description: 'Metronidazole disrupts DNA synthesis in anaerobic microbes by producing reactive radicals that cause DNA damage and cell death. It targets anaerobic bacteria and protozoa.', image: 'https://i.postimg.cc/d35nmVCb/Picture18.jpg' },
        { id: 14, name: 'Imidocarb dipropionate', description: 'Imidocarb disrupts protozoa DNA replication and transcription, impairing growth. It’s especially effective against Babesia by accumulating in infected red blood cells.', image: 'https://i.postimg.cc/P5pKYh57/Picture33.png' },
        { id: 15, name: 'Clindamycin', description: 'Clindamycin blocks protein synthesis by binding the 50S ribosomal subunit, killing susceptible bacteria. It also disrupts apicoplast function in protozoa like Toxoplasma and Plasmodium, causing their death.', image: 'https://i.postimg.cc/8kZbYsF3/Picture19.png' },
        { id: 16, name: 'Itraconazole', description: 'Itraconazole blocks fungal 14α-demethylase, stopping ergosterol production—an essential fungal cell membrane component. This weakens the membrane, causing fungal cell death.', image: 'https://i.postimg.cc/MG07mG29/Picture20.jpg' },
        { id: 17, name: 'Ketoconazole', description: 'Ketoconazole blocks lanosterol 14-α-demethylase, preventing ergosterol synthesis. This weakens the fungal cell membrane, leading to fungal cell death.', image: 'https://i.postimg.cc/rFv564qh/Picture21.png' },
        { id: 18, name: 'Miconazole', description: 'Miconazole blocks ergosterol synthesis, disrupting fungal cell membranes. This damages membrane integrity, causing fungal cell death.', image: 'https://i.postimg.cc/hGC955vm/Picture23.png' },
        { id: 19, name: 'Clavamox', description: 'Clavamox combines amoxicillin, which kills bacteria by blocking cell wall synthesis, with clavulanic acid, which protects amoxicillin from bacterial enzymes that cause resistance.', image: 'https://i.postimg.cc/C58kdMNC/Picture24.png' },
        { id: 20, name: 'Amoxi-Tabs / Amoxi-Drops', description: 'Amoxi-Tabs and Amoxi-Drops contain amoxicillin, which kills bacteria by blocking cell wall synthesis. They’re used for infections without beta-lactamase resistance.', image: 'https://i.postimg.cc/cHp8qySv/Picture25.jpg' },
        { id: 21, name: 'Ceftriaxone', description: 'Ceftriaxone is a broad-spectrum cephalosporin that kills bacteria by blocking cell wall synthesis. It’s commonly used off-label in dogs and cats to treat infections.', image: 'https://i.postimg.cc/x1184Tzs/Picture26.png' },
        { id: 22, name: 'Metronidazole', description: 'Metronidazole targets anaerobic bacteria and protozoa by producing reactive radicals that damage DNA and cause cell death. It’s widely used as an antibiotic and antiprotozoal, known as Flagyl.', image: 'https://i.postimg.cc/90BXLvF5/Picture27.jpg' },
        { id: 23, name: 'Baytril', description: 'Baytril (enrofloxacin) is a fluoroquinolone antibiotic that kills bacteria by blocking DNA replication enzymes. It’s used in many animals to treat resistant bacterial infections like UTIs, skin, respiratory, and wound infections.', image: 'https://i.postimg.cc/0NJ8T62C/Picture28.jpg' },
        { id: 24, name: 'Enroflox', description: 'Enroflox (enrofloxacin) is a fluoroquinolone antibiotic that kills bacteria by blocking DNA replication enzymes. It treats aerobic Gram-negative and some Gram-positive infections in dogs, cats, and exotic animals.', image: 'https://i.postimg.cc/pTb2R2mM/Picture29.jpg' },
        { id: 25, name: 'Cipromed', description: 'Cipromed contains ciprofloxacin, a fluoroquinolone antibiotic that kills bacteria by blocking DNA replication enzymes. It mainly targets aerobic Gram-negative bacteria and is used as an eye drop for pets.', image: 'https://i.postimg.cc/mgHJR7Ch/Picture30.jpg' },
        { id: 26, name: 'Ciprovet', description: 'Ciprovet contains ciprofloxacin, a fluoroquinolone that kills bacteria by blocking DNA replication enzymes. It’s mainly used in dogs and cats to treat bacterial eye infections.', image: 'https://i.postimg.cc/0ynW9Zrk/Picture31.jpg' },
        { id: 27, name: 'Amiglyde-V', description: 'Amiglyde-V contains amikacin, an aminoglycoside antibiotic that kills bacteria by blocking protein synthesis. It targets serious infections caused by aerobic Gram-negative and some Gram-positive bacteria.', image: 'https://i.postimg.cc/4NJpXGcc/Picture32.jpg' },
        { id: 28, name: 'Doxyvet', description: 'Doxyvet contains doxycycline, a tetracycline antibiotic that stops bacterial growth by blocking protein synthesis. It halts bacteria from multiplying but doesn’t directly kill them.', image: 'https://i.postimg.cc/1RYy3cnK/Whats-App-Image-2025-06-05-at-02-22-58-3763dc3f.jpg' },
        { id: 29, name: 'Doxyirobe', description: 'Doxyirobe combines doxycycline, which stops bacterial growth by blocking protein synthesis, with metronidazole, which kills anaerobic bacteria by disrupting DNA. Together, they offer broad antimicrobial coverage.', image: 'https://i.postimg.cc/pXzVc5rY/Whats-App-Image-2025-06-05-at-02-25-45-46e92ed5.jpg' },
        { id: 30, name: 'Zyrtec', description: 'Zyrtec contains cetirizine, a second-generation antihistamine that reduces allergy symptoms by blocking H1 receptors. It causes less drowsiness than first-generation antihistamines.', image: 'https://i.postimg.cc/XJB6Ztyc/Whats-App-Image-2025-06-05-at-02-35-22-25b67a3d.jpg' },
        { id: 31, name: 'Diphenhydramine', description: 'Diphenhydramine is a first-generation antihistamine that blocks H1 receptors to relieve allergy symptoms. It also causes sedation and dry mouth due to its anticholinergic effects.', image: 'https://i.postimg.cc/y69z74K7/Whats-App-Image-2025-06-05-at-02-38-47-25d977e9.jpg' },
        { id: 32, name: 'Claritine', description: 'Loratadine (Claritin) is a second-generation antihistamine that blocks H1 receptors to relieve allergy symptoms with minimal sedation. It doesn’t easily cross the blood-brain barrier, causing less drowsiness.', image: 'https://i.postimg.cc/XJCtNFTs/Whats-App-Image-2025-06-05-at-02-41-14-0522cac1.jpg' },
        { id: 33, name: 'Chlor-Trimeton', description: 'Chlorpheniramine (Chlor-Trimeton®) is a first-generation antihistamine that blocks H1 receptors to reduce allergy symptoms. It’s effective for mild to moderate reactions and may cause mild sedation.', image: 'https://i.postimg.cc/HWbFfw0x/Whats-App-Image-2025-06-05-at-02-43-42-a521f8ad.jpg' },
        { id: 34, name: 'Atarax', description: 'Hydroxyzine (Atarax®, Vistaril®) is a first-generation antihistamine that blocks H1 receptors to reduce allergy symptoms. It also has sedative and calming effects, useful for skin and behavioral issues in pets.', image: 'https://i.postimg.cc/FsmwmYGx/Whats-App-Image-2025-06-05-at-02-45-03-76b25afd.jpg' },
        { id: 35, name: 'Bromhexine hydrochloride', description: 'Bromhexine hydrochloride is a mucolytic that thins mucus by breaking down its fibers, helping clear the respiratory tract. It also boosts airway cilia activity, improving breathing and antibiotic effectiveness.', image: 'https://i.postimg.cc/nhSWv0xd/Whats-App-Image-2025-06-05-at-02-48-44-fe8436a0.jpg' },
        { id: 36, name: 'Taurians', description: 'Taurine is a vital amino acid for animals, supporting heart function, eye health, brain development, fat digestion, and cell protection. Cats must get taurine from their diet, as they cannot produce it naturally.', image: 'https://i.postimg.cc/hv0yh0M1/Whats-App-Image-2025-06-05-at-02-52-18-c5a3963a.jpg' },
        { id: 37, name: 'Mucomucil', description: 'Mucomucil® is a veterinary mucolytic syrup with L-Carbocysteine that thins thick mucus in dogs and cats. It helps clear secretions and ease breathing, especially in cases with mucoid or mucopurulent mucus.', image: 'https://i.postimg.cc/kgG1XKSW/Whats-App-Image-2025-06-05-at-02-55-10-638895b3.jpg' },
        { id: 38, name: 'Ambroxol', description: 'Ambroxol is a mucolytic that helps dogs and cats by thinning mucus and boosting surfactant production. It also enhances ciliary movement and has mild anti-inflammatory effects, aiding respiratory conditions like bronchitis and pneumonia.', image: 'https://i.postimg.cc/V6QDRhVF/Whats-App-Image-2025-06-05-at-02-58-10-206d2408.jpg' },
        { id: 39, name: 'Furosemide', description: 'Furosemide is a loop diuretic that increases urine production by blocking sodium and chloride reabsorption in the kidneys. It helps reduce fluid buildup in conditions like heart failure and edema.', image: 'https://i.postimg.cc/x8g591Ts/Whats-App-Image-2025-06-05-at-03-02-44-e0827f14.jpg' },
        { id: 40, name: 'Spironolactone', description: 'Spironolactone is a potassium-sparing diuretic that blocks aldosterone receptors, increasing urine output while conserving potassium. It’s used to treat fluid buildup in heart failure, liver disease, and high blood pressure.', image: 'https://i.postimg.cc/PrrK2Y20/Whats-App-Image-2025-06-05-at-03-04-21-40fd0ccf.jpg' },
        { id: 41, name: 'Hydrochlorothiazide', description: 'Hydrochlorothiazide is a thiazide diuretic that increases urine output by blocking sodium and chloride reabsorption in the kidneys. It helps reduce fluid overload and lower blood pressure.', image: 'https://i.postimg.cc/qvNwd0fL/Whats-App-Image-2025-06-05-at-03-06-23-67b90662.jpg' },
        { id: 42, name: 'Mannitol', description: 'Mannitol is an osmotic diuretic that draws water into the bloodstream, increasing urine output and reducing brain and eye pressure. It’s used in emergencies like brain swelling, glaucoma, and kidney injury.', image: 'https://i.postimg.cc/ZnYPszF6/Whats-App-Image-2025-06-05-at-03-08-17-2a04b94c.jpg' },
      ];
    } else if (petType === 'cats') {
      return [
        { id: 1, name: 'Meloxicam', description: 'Inhibits cyclooxygenase (COX), mainly COX-2, reducing inflammation, pain, and fever.', image: 'https://i.postimg.cc/Kj21YPsf/Meloxicam.png' },
        { id: 2, name: 'Ketoprofen', description: 'This vaccine reduces inflammation, pain, and fever by blocking COX enzymes and lowering prostaglandin levels in the body.', image: 'https://i.postimg.cc/1zV0nKJ1/ketofen.jpg' },
        { id: 3, name: 'Alphachymotrypsin', description: 'Alpha-chymotrypsin is an enzyme that helps reduce inflammation and swelling by breaking down proteins, aiding in tissue repair after trauma or surgery.', image: 'https://i.postimg.cc/NF2vZSxP/Picture5.png' },
        { id: 4, name: 'Carprofen', description: 'This targets COX-2 enzymes to lower prostaglandin levels, helping reduce pain, inflammation, and fever—especially after surgery or in arthritis cases.', image: 'https://i.postimg.cc/4NzxdHz2/Picture6.jpg' },
        { id: 5, name: 'Dexamethasone', description: 'Dexamethasone suppresses inflammation and immune responses by blocking cytokines and prostaglandins. It’s used to treat allergies, autoimmune diseases, and inflammation.', image: 'https://i.postimg.cc/jdrRGqGH/Picture7.png' },
        { id: 6, name: 'Prednisolone', description: 'Prednisolone reduces inflammation and immune activity by blocking prostaglandins and cytokines. It’s commonly used for allergies, asthma, and autoimmune diseases.', image: 'https://i.postimg.cc/Mp9xM7X5/Picture9.jpg' },
        { id: 7, name: 'Hydrocortisone', description: 'Hydrocortisone reduces inflammation and immune responses by blocking cytokines and prostaglandins. It is used for skin issues, allergies, and adrenal insufficiency.', image: 'https://i.postimg.cc/XvXWwrCb/Picture10.jpg' },
        { id: 8, name: 'Triamcinolone', description: 'Triamcinolone reduces inflammation and immune activity by blocking cytokines and prostaglandins. It’s effective for allergies, skin conditions, arthritis, and asthma.', image: 'https://i.postimg.cc/xd72g9vb/Picture11.png' },
        { id: 9, name: 'Drontal', description: 'Drontal is a broad-spectrum dewormer for dogs and cats. It targets tapeworms, roundworms, and hookworms by paralyzing and disrupting their metabolism.', image: 'https://i.postimg.cc/15PZvCqM/Picture13.png' },
        { id: 10, name: 'Milbemax', description: 'Milbemax is a broad-spectrum dewormer that paralyzes and kills parasites by disrupting their nerve cells and damaging their membranes, making them easy for the body to eliminate.', image: 'https://i.postimg.cc/htZWPK33/Picture14.jpg' },
        { id: 11, name: 'Panacur', description: 'Panacur contains fenbendazole, a broad-spectrum dewormer that disrupts parasite intestinal cells, causing their death. It treats roundworms, hookworms, whipworms, and some tapeworms.', image: 'https://i.postimg.cc/HLMZDHGM/Picture16.jpg' },
        { id: 12, name: 'Albenidazole', description: 'Albendazole disrupts parasite cell structure and metabolism by blocking tubulin polymerization, leading to their death. It also starves parasites by blocking glucose uptake.', image: 'https://i.postimg.cc/KjGJMM17/Picture17.jpg' },
        { id: 13, name: 'Metronidazole', description: 'Metronidazole disrupts DNA synthesis in anaerobic microbes by producing reactive radicals that cause DNA damage and cell death. It targets anaerobic bacteria and protozoa.', image: 'https://i.postimg.cc/d35nmVCb/Picture18.jpg' },
        { id: 14, name: 'Imidocarb dipropionate', description: 'Imidocarb disrupts protozoa DNA replication and transcription, impairing growth. It’s especially effective against Babesia by accumulating in infected red blood cells.', image: 'https://i.postimg.cc/P5pKYh57/Picture33.png' },
        { id: 15, name: 'Clindamycin', description: 'Clindamycin blocks protein synthesis by binding the 50S ribosomal subunit, killing susceptible bacteria. It also disrupts apicoplast function in protozoa like Toxoplasma and Plasmodium, causing their death.', image: 'https://i.postimg.cc/8kZbYsF3/Picture19.png' },
        { id: 16, name: 'Itraconazole', description: 'Itraconazole blocks fungal 14α-demethylase, stopping ergosterol production—an essential fungal cell membrane component. This weakens the membrane, causing fungal cell death.', image: 'https://i.postimg.cc/MG07mG29/Picture20.jpg' },
        { id: 17, name: 'Ketoconazole', description: 'Ketoconazole blocks lanosterol 14-α-demethylase, preventing ergosterol synthesis. This weakens the fungal cell membrane, leading to fungal cell death.', image: 'https://i.postimg.cc/rFv564qh/Picture21.png' },
        { id: 18, name: 'Miconazole', description: 'Miconazole blocks ergosterol synthesis, disrupting fungal cell membranes. This damages membrane integrity, causing fungal cell death.', image: 'https://i.postimg.cc/hGC955vm/Picture23.png' },
        { id: 19, name: 'Clavamox', description: 'Clavamox combines amoxicillin, which kills bacteria by blocking cell wall synthesis, with clavulanic acid, which protects amoxicillin from bacterial enzymes that cause resistance.', image: 'https://i.postimg.cc/C58kdMNC/Picture24.png' },
        { id: 20, name: 'Amoxi-Tabs / Amoxi-Drops', description: 'Amoxi-Tabs and Amoxi-Drops contain amoxicillin, which kills bacteria by blocking cell wall synthesis. They’re used for infections without beta-lactamase resistance.', image: 'https://i.postimg.cc/cHp8qySv/Picture25.jpg' },
        { id: 21, name: 'Ceftriaxone', description: 'Ceftriaxone is a broad-spectrum cephalosporin that kills bacteria by blocking cell wall synthesis. It’s commonly used off-label in dogs and cats to treat infections.', image: 'https://i.postimg.cc/x1184Tzs/Picture26.png' },
        { id: 22, name: 'Metronidazole', description: 'Metronidazole targets anaerobic bacteria and protozoa by producing reactive radicals that damage DNA and cause cell death. It’s widely used as an antibiotic and antiprotozoal, known as Flagyl.', image: 'https://i.postimg.cc/90BXLvF5/Picture27.jpg' },
        { id: 23, name: 'Baytril', description: 'Baytril (enrofloxacin) is a fluoroquinolone antibiotic that kills bacteria by blocking DNA replication enzymes. It’s used in many animals to treat resistant bacterial infections like UTIs, skin, respiratory, and wound infections.', image: 'https://i.postimg.cc/0NJ8T62C/Picture28.jpg' },
        { id: 24, name: 'Enroflox', description: 'Enroflox (enrofloxacin) is a fluoroquinolone antibiotic that kills bacteria by blocking DNA replication enzymes. It treats aerobic Gram-negative and some Gram-positive infections in dogs, cats, and exotic animals.', image: 'https://i.postimg.cc/pTb2R2mM/Picture29.jpg' },
        { id: 25, name: 'Cipromed', description: 'Cipromed contains ciprofloxacin, a fluoroquinolone antibiotic that kills bacteria by blocking DNA replication enzymes. It mainly targets aerobic Gram-negative bacteria and is used as an eye drop for pets.', image: 'https://i.postimg.cc/mgHJR7Ch/Picture30.jpg' },
        { id: 26, name: 'Ciprovet', description: 'Ciprovet contains ciprofloxacin, a fluoroquinolone that kills bacteria by blocking DNA replication enzymes. It’s mainly used in dogs and cats to treat bacterial eye infections.', image: 'https://i.postimg.cc/0ynW9Zrk/Picture31.jpg' },
        { id: 27, name: 'Amiglyde-V', description: 'Amiglyde-V contains amikacin, an aminoglycoside antibiotic that kills bacteria by blocking protein synthesis. It targets serious infections caused by aerobic Gram-negative and some Gram-positive bacteria.', image: 'https://i.postimg.cc/4NJpXGcc/Picture32.jpg' },
        { id: 28, name: 'Doxyvet', description: 'Doxyvet contains doxycycline, a tetracycline antibiotic that stops bacterial growth by blocking protein synthesis. It halts bacteria from multiplying but doesn’t directly kill them.', image: 'https://i.postimg.cc/1RYy3cnK/Whats-App-Image-2025-06-05-at-02-22-58-3763dc3f.jpg' },
        { id: 29, name: 'Doxyirobe', description: 'Doxyirobe combines doxycycline, which stops bacterial growth by blocking protein synthesis, with metronidazole, which kills anaerobic bacteria by disrupting DNA. Together, they offer broad antimicrobial coverage.', image: 'https://i.postimg.cc/pXzVc5rY/Whats-App-Image-2025-06-05-at-02-25-45-46e92ed5.jpg' },
        { id: 30, name: 'Zyrtec', description: 'Zyrtec contains cetirizine, a second-generation antihistamine that reduces allergy symptoms by blocking H1 receptors. It causes less drowsiness than first-generation antihistamines.', image: 'https://i.postimg.cc/XJB6Ztyc/Whats-App-Image-2025-06-05-at-02-35-22-25b67a3d.jpg' },
        { id: 31, name: 'Diphenhydramine', description: 'Diphenhydramine is a first-generation antihistamine that blocks H1 receptors to relieve allergy symptoms. It also causes sedation and dry mouth due to its anticholinergic effects.', image: 'https://i.postimg.cc/y69z74K7/Whats-App-Image-2025-06-05-at-02-38-47-25d977e9.jpg' },
        { id: 32, name: 'Claritine', description: 'Loratadine (Claritin) is a second-generation antihistamine that blocks H1 receptors to relieve allergy symptoms with minimal sedation. It doesn’t easily cross the blood-brain barrier, causing less drowsiness.', image: 'https://i.postimg.cc/XJCtNFTs/Whats-App-Image-2025-06-05-at-02-41-14-0522cac1.jpg' },
        { id: 33, name: 'Chlor-Trimeton', description: 'Chlorpheniramine (Chlor-Trimeton®) is a first-generation antihistamine that blocks H1 receptors to reduce allergy symptoms. It’s effective for mild to moderate reactions and may cause mild sedation.', image: 'https://i.postimg.cc/HWbFfw0x/Whats-App-Image-2025-06-05-at-02-43-42-a521f8ad.jpg' },
        { id: 34, name: 'Atarax', description: 'Hydroxyzine (Atarax®, Vistaril®) is a first-generation antihistamine that blocks H1 receptors to reduce allergy symptoms. It also has sedative and calming effects, useful for skin and behavioral issues in pets.', image: 'https://i.postimg.cc/FsmwmYGx/Whats-App-Image-2025-06-05-at-02-45-03-76b25afd.jpg' },
        { id: 35, name: 'Bromhexine hydrochloride', description: 'Bromhexine hydrochloride is a mucolytic that thins mucus by breaking down its fibers, helping clear the respiratory tract. It also boosts airway cilia activity, improving breathing and antibiotic effectiveness.', image: 'https://i.postimg.cc/nhSWv0xd/Whats-App-Image-2025-06-05-at-02-48-44-fe8436a0.jpg' },
        { id: 36, name: 'Taurians', description: 'Taurine is a vital amino acid for animals, supporting heart function, eye health, brain development, fat digestion, and cell protection. Cats must get taurine from their diet, as they cannot produce it naturally.', image: 'https://i.postimg.cc/hv0yh0M1/Whats-App-Image-2025-06-05-at-02-52-18-c5a3963a.jpg' },
        { id: 37, name: 'Mucomucil', description: 'Mucomucil® is a veterinary mucolytic syrup with L-Carbocysteine that thins thick mucus in dogs and cats. It helps clear secretions and ease breathing, especially in cases with mucoid or mucopurulent mucus.', image: 'https://i.postimg.cc/kgG1XKSW/Whats-App-Image-2025-06-05-at-02-55-10-638895b3.jpg' },
        { id: 38, name: 'Ambroxol', description: 'Ambroxol is a mucolytic that helps dogs and cats by thinning mucus and boosting surfactant production. It also enhances ciliary movement and has mild anti-inflammatory effects, aiding respiratory conditions like bronchitis and pneumonia.', image: 'https://i.postimg.cc/V6QDRhVF/Whats-App-Image-2025-06-05-at-02-58-10-206d2408.jpg' },
        { id: 39, name: 'Furosemide', description: 'Furosemide is a loop diuretic that increases urine production by blocking sodium and chloride reabsorption in the kidneys. It helps reduce fluid buildup in conditions like heart failure and edema.', image: 'https://i.postimg.cc/x8g591Ts/Whats-App-Image-2025-06-05-at-03-02-44-e0827f14.jpg' },
        { id: 40, name: 'Spironolactone', description: 'Spironolactone is a potassium-sparing diuretic that blocks aldosterone receptors, increasing urine output while conserving potassium. It’s used to treat fluid buildup in heart failure, liver disease, and high blood pressure.', image: 'https://i.postimg.cc/PrrK2Y20/Whats-App-Image-2025-06-05-at-03-04-21-40fd0ccf.jpg' },
        { id: 41, name: 'Hydrochlorothiazide', description: 'Hydrochlorothiazide is a thiazide diuretic that increases urine output by blocking sodium and chloride reabsorption in the kidneys. It helps reduce fluid overload and lower blood pressure.', image: 'https://i.postimg.cc/qvNwd0fL/Whats-App-Image-2025-06-05-at-03-06-23-67b90662.jpg' },
        { id: 42, name: 'Mannitol', description: 'Mannitol is an osmotic diuretic that draws water into the bloodstream, increasing urine output and reducing brain and eye pressure. It’s used in emergencies like brain swelling, glaucoma, and kidney injury.', image: 'https://i.postimg.cc/ZnYPszF6/Whats-App-Image-2025-06-05-at-03-08-17-2a04b94c.jpg' },
      ];
    }
    
    return [];
  };

  const filterMedicinesByCategory = (medicines: any[], category: string) => {
    if (category === 'all') return medicines;
    
    const categoryRanges: { [key: string]: [number, number] } = {
      'anti-inflammatories': [1, 8],
      'anti-parasitics': [9, 15],
      'anti-fungals': [16, 18],
      'antibiotics': [19, 29],
      'antihistaminic': [30, 34],
      'mucolytics': [35, 38],
      'diuretic': [39, 42]
    };
    
    const range = categoryRanges[category];
    if (!range) return medicines;
    
    return medicines.filter(medicine => medicine.id >= range[0] && medicine.id <= range[1]);
  };

  const medicines = getMedicinesForPetType();
  const filteredMedicines = filterMedicinesByCategory(medicines, selectedCategory);

  const renderMedicineCard = (medicine: any) => {
    if (petType === 'dogs') {
      return (
        <DogMedicineCard
          key={medicine.id}
          id={medicine.id}
          name={medicine.name}
          description={medicine.description}
          image={medicine.image}
        />
      );
    } else if (petType === 'cats') {
      return (
        <CatMedicineCard
          key={medicine.id}
          id={medicine.id}
          name={medicine.name}
          description={medicine.description}
          image={medicine.image}
        />
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredMedicines.map((medicine) => renderMedicineCard(medicine))}
    </div>
  );
};

export default MedicineGrid;
