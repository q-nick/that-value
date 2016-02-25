'use strict';

module.exports = function(country) {
    this.pushValidation({
        name: 'zipCode',
        validator: function(value) {
            return validator(value, country);
        }
    });
    return this;
};

function validator(value, country) {
    var regexes = []; //they could be many
    switch (country) {
        case 'AF':
        case 'AL':
        case 'AM':
        case 'AR':
        case 'AT':
        case 'AU':
        case 'BD':
        case 'BE':
        case 'BG':
        case 'CV':
        case 'CX':
        case 'CC':
        case 'CY':
        case 'DK':
        case 'SV':
        case 'ET':
        case 'GE':
        case 'DE':
        case 'GL':
        case 'GW':
        case 'HT':
        case 'HU':
        case 'LR':
        case 'LU':
        case 'LI':
        case 'MK':
        case 'MZ':
        case 'NZ':
        case 'NE':
        case 'NF':
        case 'NO':
        case 'PA':
        case 'PY':
        case 'PH':
        case 'PT':
        case 'SG':
        case 'SI':
        case 'ZA':
        case 'CH':
        case 'SJ':
        case 'TN':
        case 'VE':
            regexes.push(/^[0-9]{4}$/);
    }
    switch (country) {
        case 'AX':
        case 'DZ':
        case 'AS':
        case 'BT':
        case 'BA':
        case 'BR':
        case 'KH':
        case 'CR':
        case 'HR':
        case 'CU':
        case 'DO':
        case 'EG':
        case 'EE':
        case 'FI':
        case 'FR':
        case 'DE':
        case 'GU':
        case 'GT':
        case 'ID':
        case 'IQ':
        case 'IT':
        case 'JO':
        case 'KE':
        case 'KR':
        case 'XK':
        case 'KW':
        case 'LA':
        case 'LB':
        case 'MY':
        case 'MV':
        case 'MH':
        case 'MU':
        case 'MX':
        case 'FM':
        case 'ME':
        case 'MA':
        case 'MM':
        case 'NA':
        case 'NP':
        case 'NI':
        case 'MP':
        case 'PK':
        case 'PW':
        case 'PE':
        case 'PR':
        case 'SA':
        case 'SN':
        case 'RS':
        case 'ES':
        case 'LK':
        case 'SD':
        case 'TZ':
        case 'TH':
        case 'TR':
        case 'UA':
        case 'US':
        case 'UY':
        case 'VI':
        case 'ZM':
            regexes.push(/^[0-9]{5}$/);
    }
    switch (country) {
        case 'BD':
        case 'BY':
        case 'CN':
        case 'CO':
        case 'EC':
        case 'IN':
        case 'KZ':
        case 'KG':
        case 'MN':
        case 'NG':
        case 'RO':
        case 'RU':
        case 'SG':
        case 'TJ':
        case 'TT':
        case 'TM':
        case 'UZ':
        case 'VN':
            regexes.push(/^[0-9]{6}$/);
    }
    switch (country) {
        case 'AS':
        case 'CR':
        case 'GU':
        case 'MH':
        case 'FM':
        case 'MP':
        case 'PW':
        case 'PR':
        case 'SA':
        case 'US':
        case 'VI':
            regexes.push(/^[0-9]{5}\-[0-9]{4}$/);
    }
    switch (country) {
        case 'AO':
        case 'AG':
        case 'AW':
        case 'BS':
        case 'BZ':
        case 'BJ':
        case 'BM':
        case 'BO':
        case 'BQ':
        case 'BW':
        case 'BF':
        case 'BI':
        case 'CM':
        case 'CF':
        case 'TD':
        case 'KM':
        case 'CG':
        case 'CD':
        case 'CK':
        case 'CI':
        case 'CW':
        case 'DJ':
        case 'DM':
        case 'TL':
        case 'GQ':
        case 'ER':
        case 'FJ':
        case 'TF':
        case 'GA':
        case 'GM':
        case 'GH':
        case 'GD':
        case 'GY':
        case 'HM':
        case 'HK':
        case 'IE':
        case 'KI':
        case 'KP':
        case 'LY':
        case 'MO':
        case 'MW':
        case 'ML':
        case 'MR':
        case 'NR':
        case 'NL':
        case 'NU':
        case 'QA':
        case 'KN':
        case 'ST':
        case 'SC':
        case 'SL':
        case 'SX':
        case 'SB':
        case 'SR':
        case 'SY':
        case 'TG':
        case 'TK':
        case 'TO':
        case 'TV':
        case 'UG':
        case 'AE':
        case 'VU':
        case 'YE':
        case 'ZW':
            return value === null || value === undefined || value === '';
    }
    switch (country) {
        case 'AZ':
        case 'VG':
        case 'MD':
        case 'VC':
        case 'WS':
            regexes.push(new RegExp('^' + country + '[0-9]{4}$'));
    }
    switch (country) {
        case 'BB':
        case 'HN':
            regexes.push(new RegExp('^' + country + '[0-9]{5}$'));
    }
    switch (country) {
        case 'BH':
        case 'FO':
        case 'GN':
        case 'IS':
        case 'LS':
        case 'OM':
        case 'PS':
        case 'PG':
        case 'TW':
            regexes.push(/^[0-9]{3}$/);
    }
    switch (country) {
        case 'CL':
        case 'IL':
            regexes.push(/^[0-9]{7}$/);
    }
    switch (country) {
        case 'CL':
        case 'JP':
            regexes.push(/^[0-9]{3}\-[0-9]{4}$/);
    }
    switch (country) {
        case 'CZ':
        case 'GR':
        case 'SK':
        case 'SE':
            regexes.push(/^[0-9]{3} [0-9]{2}$/);
    }

    if (singleRegexes[country]) {
        regexes.push(singleRegexes[country]);
    }

    if (country === 'GB') {
        regexes.push(/^[a-zA-Z]{2}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{2}$/);
        regexes.push(/^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{2}$/);

        regexes.push(/^[a-zA-Z]{1,2}[0-9]{1,2} [0-9]{1}[a-zA-Z]{2}$/);
    }

    var anyValid = false;
    for (var i = 0; i < regexes.length; i++) {
        if (regexes[i].test(value)) {
            anyValid = true;
        }
    }
    return anyValid;
}

var singleRegexes = {
    AX: /^FN\-[0-9]{5}$/,
    LT: /^LT\-[0-9]{5}$/,
    AD: /^AD[0-9]{3}$/,
    AI: /^AI\-2640$/,
    AQ: /^BIQQ 1ZZ$/,
    IO: /^BBND 1ZZ$/,
    CA: /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{1}[0-9]{1}$/,
    KY: /^KY[0-9]{1}\-[0-9]{4}$/,
    BN: /^[a-zA-Z]{1,2}[0-9]{4}$/,
    FK: /^FIQQ 1ZZ$/,
    GF: /^973[0-9]{2}$/,
    PF: /^987[0-9]{2}$/,
    GI: /^GX11 1AA$/,
    GP: /^971[0-9]{2}$/,
    GG: /^[a-zA-Z]{2}[0-9]{1,2} [0-9]{1}[a-zA-Z]{2}$/,
    IN: /^[0-9]{3} [0-9]{3}$/,
    JM: /^[0-9]{2}$/,
    JE: /^JE[0-9]{1,2} [0-9]{1}[a-zA-Z]{2}$/,
    LV: /^LV\-[0-9]{4}$/,
    LB: /^[0-9]{4}\-[0-9]{4}$/,
    MT: /^[a-zA-Z]{3} [0-9]{4}$/,
    MQ: /^972[0-9]{2}$/,
    YT: /^976[0-9]{2}$/,
    MD: /^MD\-[0-9]{4}$/,
    MC: /^980[0-9]{2}$/,
    MS: /^MSR 1110-1350$/,
    NC: /^988[0-9]{2}$/,
    PE: /^PE [0-9]{4}$/,
    PN: /^PCRN 1ZZ$/,
    PL: /^[0-9]{2}\-[0-9]{3}$/,
    PT: /^[0-9]{4}\-[0-9]{3}$/,
    RE: /^974[0-9]{2}$/,
    BL: /^97133$/,
    SH: /^STHL 1ZZ|TDCU 1ZZ$/,
    LC: /^LC[0-9]{2} [0-9]{3}$/,
    MF: /^97150$/,
    PM: /^97500$/,
    SM: /^4789[0-9]{1}$/,
    SG: /^[0-9]{2}$/,
    SI: /^SI\-[0-9]{4}$/,
    SO: /^[a-zA-Z]{2} [0-9]{4}$/,
    GS: /^SIQQ 1ZZ$/,
    SZ: /^[a-zA-Z]{1}[0-9]{3} [0-9]{1}[a-zA-Z]{2}$/,
    TW: /^[0-9]{3}\-[0-9]{2}$/,
    TC: /^TKCA 1ZZ$/,
    WF: /^986[0-9]{2}$/,
    VE: /^[0-9]{4}\-[a-zA-Z]{1}$/,
    VA: /^00120$/
};

