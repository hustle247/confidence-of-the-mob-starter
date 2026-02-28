const fs = require('fs');

const driveFiles = [
    { "name": "001_fgp_comments_to_chief_intelligence_suggestions_for_investigation_procedures.pdf", "id": "1k3b0rRTqrBMrgzeEAykDfbP-g_o7QWGb" },
    { "name": "002_fgp_assigned_racketeering_liaison_officer.pdf", "id": "1MppEmWiqVPCgTwlxyaDP9Xt7p9C1RsjW" },
    { "name": "003_fgp_commendation_reply_from_irs_to_states_attorney_for_iaconi_case.pdf", "id": "1-PnRSZuN3OJAvv468KibKx7QkRomKbtA" },
    { "name": "004_intelligence_division_police_training_class_schedule.pdf", "id": "1YaxB6YFrhrq5Ek4XLHxB-Ud3h8LO4zwI" },
    { "name": "005_theartofsurveillancedetectivetraining_1960-12-05.pdf", "id": "1vp50Z0em_J1we76bn7lopo2StF6qiXSv" },
    { "name": "006_manual_supplement_special_racketeer_investigations.pdf", "id": "165M6jQ_13UO-3q_jhTaSfwXlLHhQrGrj" },
    { "name": "007_net_worth_expenditure_statement_handwritten_ledger_by _fgp.pdf", "id": "1bTXOY_5INb8Z-XjtRPQzCVHfxxQb9kw0" },
    { "name": "008_irs_circular_1951-07-27.pdf", "id": "1DDkf7iFBXnQ9CzzDrxMFlo2I1Tx1yEpk" },
    { "name": "009_confidential_magazine_raytheon.pdf", "id": "1mfR4HtjH3_3OX09wbVFfBUL45LjsSrV_" },
    { "name": "010_IRS_raytheon_project_infodigest_1958-02-13.pdf", "id": "1Jr3r-o1G3Bcaq_-FXLutuoG56Wyodg2J" },
    { "name": "011_raytheon_leads_1958-01-13.pdf", "id": "1wthi9rrNC6cv5NWjE1neIAJI8jeTKATX" },
    { "name": "012_frank_cuchiara_workplan_1961-04-05.pdf", "id": "10WUgjyQTSgRcdaokpw8Afis-xudB_rJy" },
    { "name": "013_photo_freds_agent_tagging_car.pdf", "id": "1VF5oKEvhBDUxu8s3VpXPNaOgYbPASgyZ" },
    { "name": "014_freds_certification_criminal_investigation_course.pdf", "id": "16D4kCHjgpuVeWbD6IBDJU3RAJhmSYJH5" },
    { "name": "015_racketeer_liason_officer_position_description_1958-01-01.pdf", "id": "1VA7yiqSqzu6eQxpiufEuXInKjAxNCelW" },
    { "name": "016_procedure_joint_investigation_1959-04-02.pdf", "id": "1FquVLa8XoZirWAYMZWldLb9WGiGVP3ou" },
    { "name": "017_intelligence_meeting_boston_1957-05-17.pdf", "id": "1Fgq1NZhXzEKFjZAf_Crw-y4PkBTZ4YZH" },
    { "name": "018_incentive_awards_structure_1954-01-01.pdf", "id": "13LJhVSA0y5c_EcVqI81KFqB9mN4c3RBT" },
    { "name": "019-instructor_guide_for_special_agent_1959-06-23.pdf", "id": "1Qz9NVns5eNtRxlCyv8n6719PX7okBZHG" },
    { "name": "020_boston_irs_building_floorplan_1950's.pdf", "id": "157YKC7NY2-bxtbk_Z-EBOBzExBjD0Ls-" },
    { "name": "021_uscustoms_lab_markers_1958-01-10.pdf", "id": "1kNxOMvQZBQAFHpu9R9sLYN9Ws2uYkAPZ" },
    { "name": "022_treasury_law_enforcement_training_school_1958-01-01.pdf", "id": "1-1UTYUcDdyWCSLDbL07bLltN_rWI_0Td" },
    { "name": "023_boston_major_racketeers_list_and_profiles.pdf", "id": "1-CrEe6RvM4thAgLwNJJsppyLCUyPE7_O" },
    { "name": "024_guide_for_racketeer_investigations.pdf", "id": "16UD8rq6CdGnGeHYw0Rp57ktFpxteLzpo" },
    { "name": "025_wagering_tax_ooperations_and_corruption_partial.pdf", "id": "1JEKq8YHbQwCUXWYE0HgqnMMRlRx3lAWA" },
    { "name": "026_estimated_funds_for_organized_crime_drive_fiscal_year_6-30-62.pdf", "id": "16NTg2c2kVLSTSAj5Dj2Ajgy3T31stv0v" },
    { "name": "027_coin_operated_gaming_devices_memo_by_fred_1957-09-06.pdf", "id": "1XEFap1JblV2xKL1Clmf8H0XyTN-XJdn5" },
    { "name": "028_seizure_of_coin_operated_devices_1956-08-07.pdf", "id": "1oXs6HQ4LYcF5nlUBuIat4QbEVuU23Jnh" },
    { "name": "029_seizure_of_personal_property_memo_1955-05-17.pdf", "id": "10KKUzw-JGvhyVHO6vUcNlTBRXgfF690r" },
    { "name": "030_telegram_from_fgp_to_rfk_jfk.pdf", "id": "1zQJuzqUZA4MhTwwitqbptIFQOCrWdRRr" },
    { "name": "031_cover_page_for_goldfine_boston_project_four_daily_diary.jpeg", "id": "1L_vON8q0JqlfyGpsTr2PdVHsFRphorGc" },
    { "name": "032_institute_for_intelligence_supervisors_1961-04-24.pdf", "id": "1OJOAq6lreD-DM6QbNcW0PPovJrkJFCC1" }
];

const docs = JSON.parse(fs.readFileSync('data/documents.json', 'utf8'));

const updatedDocs = docs.map(doc => {
    const numMatch = doc.id.match(/^(\d{3})/);
    if (numMatch) {
        const prefix = numMatch[1];
        const driveFile = driveFiles.find(f => f.name.startsWith(prefix));
        if (driveFile) {
            return { ...doc, driveId: driveFile.id };
        }
    }
    return doc;
});

fs.writeFileSync('data/documents.json', JSON.stringify(updatedDocs, null, 2));
console.log(`Updated ${updatedDocs.filter(d => d.driveId !== 'YOUR_GOOGLE_DRIVE_FILE_ID_HERE').length} documents with drive IDs.`);
