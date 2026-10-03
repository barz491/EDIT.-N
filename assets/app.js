const $ = id => document.getElementById(id),
    I = n => `<i class="m">${n}</i>`,
    rp = n => 'Rp ' + Number(n || 0).toLocaleString('id-ID'),
    esc = s => String(s ?? '').replace(/"/g, '&quot;'),
    QS = k => new URLSearchParams(location.search).get(k) || '';

const fd = d =>
    new Date(d).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

const today = () => new Date().toISOString().slice(0, 10);

const CATS = [
    'Desain Grafis',
    '3D Modeling',
    'Desain Maskot',
    'Editing Video & Foto'
];

const SL = {
    'Desain Grafis': 'grafis',
    '3D Modeling': '3d',
    'Desain Maskot': 'maskot',
    'Editing Video & Foto': 'video'
};

const O = (
    n,
    cust,
    wa,
    svc,
    cat,
    designer,
    pay,
    status,

    progress,
    deadline,
    amount
) => ({
    id: 'ORD-2026-' + n,
    cust,
    wa,
    svc,
    cat,
    designer,
    pay,
    status,
    progress,
    deadline,
    amount
});

const P = (
    n,
    client,
    svc,
    type,
    amount,
    channel,
    status,
    time
) => ({
    id: 'PAY-' + n,
    order: 'ORD-2026-' + n.slice(0, 4),
    client,
    svc,
    type,
    amount,
    channel,
    status,
    time
});

const SEED = {
    v: 4,

    requests: [
        {
            id: 'REQ-2026-0043',
            name: 'Botanica Herbal Beauty',
            wa: '0812-7711-0043',
            svc: '3D Visual Kemasan Botol Serum Organik',
            cat: '3D Modeling',
            date: '2026-09-23',
            status: 'Baru',
            brief: 'Rendering 3D botol serum kaca 30ml beserta box packaging.',
            email: 'hello@botanica.id',
            rec: 'Audi Khalila Sapphire'
        },
        {
            id: 'REQ-2026-0042',
            name: 'Ataya',
            wa: '0812-9876-5432',
            svc: 'Desain Maskot Brand & IP',
            cat: 'Desain Maskot',
            date: '2026-09-22',
            status: 'Baru',
            brief: 'Desain Karakter Maskot Kucing Barista untuk Kemasan Cup & Media Sosial. Membutuhkan maskot kucing ramah mengenakan celemek barista sambil memegang cup.',
            email: 'ataya.creative@mail.com',
            rec: 'Muhammad Rino Mardiansyah'
        },
        {
            id: 'REQ-2026-0041',
            name: 'Kopi Senja',
            wa: '0812-9844-3321',
            svc: 'Kemasan & Grafis',
            cat: 'Desain Grafis',
            date: '2026-09-22',
            status: 'Menunggu',
            brief: 'Re-desain kemasan drip bag kopi arabika sachet 10gr.',
            email: 'kopisenja@mail.com',
            rec: 'Andisa Zahra A.'
        },
        {
            id: 'REQ-2026-0040',
            name: 'dr. Kevin Pratama',
            wa: '0813-8900-1123',
            svc: 'Ilustrasi Karakter',
            cat: 'Desain Maskot',
            date: '2026-09-21',
            status: 'Baru',
            brief: 'Ilustrasi karakter dokter untuk materi edukasi klinik.',
            email: '-',
            rec: 'Muhammad Rino Mardiansyah'
        },
        {
            id: 'REQ-2026-0039',
            name: 'CV Bangun Perkasa',
            wa: '0878-4411-9922',
            svc: '3D Visualisasi Interior',
            cat: '3D Modeling',
            date: '2026-09-21',
            status: 'Menunggu',
            brief: 'Visualisasi 3D interior kantor 2 ruangan.',
            email: '-',
            rec: 'Audi Khalila Sapphire'
        },
        {
            id: 'REQ-2026-0038',
            name: 'Dapur Nafisa',
            wa: '0857-1922-8840',
            svc: 'Editing Video Reels',
            cat: 'Editing Video & Foto',
            date: '2026-09-20',
            status: 'Menunggu',
            brief: 'Editing 3 video reels resep, durasi 30 detik.',
            email: '-',
            rec: 'Azriansyah Joanda Pratama'
        },
        {
            id: 'REQ-2026-0037',
            name: 'Yayasan Vokasi Nusantara',
            wa: '0811-2233-4455',
            svc: 'Desain Grafis (Kemasan Drip Bag Kopi)',
            cat: 'Desain Grafis',
            date: '2026-09-19',
            status: 'Dikonversi',
            brief: 'Kemasan sachet foil & outer box 5 varian.',
            email: '-',
            rec: 'Andisa Zahra A.'
        },
        {
            id: 'REQ-2026-0036',
            name: 'Toko Batik Laras',
            wa: '0815-6600-1212',
            svc: 'Editing Foto Katalog',
            cat: 'Editing Video & Foto',
            date: '2026-09-18',
            status: 'Ditolak',
            brief: 'Retouch 200 foto katalog (di luar anggaran).',
            email: '-',
            rec: ''
        }
    ],

    orders: [
        O(
            '0042',
            'Ataya Prasetya',
            '0812-9876-5432',
            'Desain Karakter Maskot',
            'Desain Maskot',
            'Muhammad Rino Mardiansyah',
            'DP 50%',
            'Sedang Dikerjakan',
            50,
            '2026-09-27',
            350000
        ),

        O(
            '0040',
            'Kopi Kenangan Senja',
            '0857-3310-2211',
            'Robot Mascot 3D Render',
            '3D Modeling',
            'Audi Khalila Sapphire',
            'DP 50%',
            'Menunggu Review',
            85,
            '2026-09-29',
            650000
        ),

        O(
            '0039',
            'Sweet Bakery Dimas',
            '0813-4490-8900',
            'Video Reels Promosi Menu',
            'Editing Video & Foto',
            'Azriansyah Joanda Pratama',
            'DP 50%',
            'Revisi',
            70,
            '2026-09-30',
            450000
        ),

        O(
            '0047',
            'Klinik dr. Kevin',
            '0899-7711-1123',
            'Branding Identity & Logo',
            'Desain Grafis',
            '',
            'Menunggu Pembayaran',
            'Menunggu DP',
            0,
            '2026-10-05',
            500000
        ),

        O(
            '0038',
            'Yayasan Vokasi Nusantara',
            '0811-2233-4455',
            'Desain Grafis (Kemasan Kopi Drip Bag)',
            'Desain Grafis',
            'Andisa Zahra A.',
            'DP 50%',
            'Sedang Dikerjakan',
            43,
            '2026-10-03',
            1700000
        ),

        O(
            '0043',
            'Sarah Amalia',
            '0857-1122-3344',
            'Retouch & Foto Katalog Produk',
            'Editing Video & Foto',
            'Azriansyah Joanda Pratama',
            'DP 50%',
            'Sedang Dikerjakan',
            30,
            '2026-10-01',
            1400000
        ),

        O(
            '0044',
            'Dapur Mama Gina',
            '0813-8899-7700',
            'Editing Video YouTube Tutorial',
            'Editing Video & Foto',
            'Azriansyah Joanda Pratama',
            'DP 50%',
            'Sedang Dikerjakan',
            40,
            '2026-10-04',
            850000
        ),

        O(
            '0046',
            'CV Nusantara Logistik',
            '0821-6677-8899',
            'Company Profile Booklet',
            'Desain Grafis',
            '',
            'Menunggu Pembayaran',
            'Menunggu DP',
            0,
            '2026-10-10',
            500000
        ),

        O(
            '0019',
            'Koperasi Guru Sejahtera',
            '0812-5500-1919',
            'Buku Profil Organisasi',
            'Desain Grafis',
            'Andisa Zahra A.',
            'DP 50%',
            'Sedang Dikerjakan',
            35,
            '2026-10-06',
            900000
        ),

        O(
            '0035',
            'Dapur Nafisa',
            '0821-9988-5531',
            'Banner Promosi & Brosur',
            'Desain Grafis',
            'Andisa Zahra A.',
            'Lunas',
            'Selesai',
            100,
            '2026-09-18',
            275000
        ),

        O(
            '0045',
            'Bimbel Juara Belajar',
            '0878-4412-9988',
            'Motion Graphics Video Promosi',
            'Editing Video & Foto',
            'Azriansyah Joanda Pratama',
            'Lunas',
            'Selesai',
            100,
            '2026-09-19',
            1650000
        ),

        O(
            '0034',
            'Hendra Wijaya',
            '0819-3321-4455',
            'Desain Menu & Social Media Kit',
            'Desain Grafis',
            'Andisa Zahra A.',
            'Lunas',
            'Selesai',
            100,
            '2026-09-10',
            250000
        )
    ],

    customers: [
        ['Ataya Prasetya', 'BobaKiddies F&B', '0812-9876-5432', 2],
        ['Sarah Amalia', 'Amalia Glow Beauty', '0857-1122-3344', 4],
        ['Dapur Mama Gina', 'Catering & Resto Mama Gina', '0813-8899-7700', 1],
        ['Bimbel Juara Belajar', 'PT Edukasi Prestasi Juara', '0878-4412-9988', 3],
        ['Hendra Wijaya', 'Kedai Kopi Sudut Temu', '0819-3321-4455', 0],
        ['CV Nusantara Logistik', 'Jasa Ekspedisi Logistik', '0821-6677-8899', 0],
        ['Kopi Kenangan Senja', 'Kopi Kenangan Senja', '0857-3310-2211', 1],
        ['Sweet Bakery Dimas', 'Sweet Bakery', '0813-4490-8900', 0],
        ['Yayasan Vokasi Nusantara', 'Yayasan Vokasi', '0811-2233-4455', 0],
        ['Dapur Nafisa', 'Dapur Nafisa', '0821-9988-5531', 1]
    ].map(c => ({
        name: c[0],
        brand: c[1],
        wa: c[2],
        prev: c[3]
    })),

    payments: [
        P(
            '0042A',
            'Ataya Pratama',
            'Desain Maskot & Karakter',
            'DP 50%',
            175000,
            'BCA Transfer',
            'DP Terverifikasi',
            '2026-09-20T09:15'
        ),

        P(
            '0043A',
            'Sarah Amalia',
            'Retouch & Foto Katalog',
            'Pelunasan 50%',
            700000,
            'QRIS Studio',
            'Bukti Diterima',
            '2026-09-20T15:40'
        ),

        P(
            '0044A',
            'Dapur Mama Gina',
            'Editing Video YouTube (5 Konten)',
            'DP 50%',
            425000,
            'Mandiri Transfer',
            'Dalam Verifikasi',
            '2026-09-19T13:10'
        ),

        P(
            '0045A',
            'Bimbel Juara Belajar',
            'Motion Graphics Promosi IG',
            'Pelunasan Penuh',
            1650000,
            'Bank BCA',
            'Lunas',
            '2026-09-19T11:00'
        ),

        P(
            '0046A',
            'CV Nusantara Logistik',
            'Company Profile Booklet 12 Hal',
            'DP 50%',
            250000,
            'QRIS Studio',
            'Menunggu Pembayaran',
            '2026-09-20T10:20'
        ),

        P(
            '0038A',
            'Yayasan Vokasi Nusantara',
            'Kemasan Kopi Drip Bag',
            'DP 50%',
            850000,
            'Bank BCA',
            'DP Terverifikasi',
            '2026-09-19T10:00'
        ),

        P(
            '0035A',
            'Dapur Nafisa',
            'Banner Promosi & Brosur',
            'Pelunasan Penuh',
            275000,
            'Bank BCA',
            'Lunas',
            '2026-09-17T14:00'
        )
    ],

    services: [
        [
            'Desain Maskot',
            'Desain Maskot & Karakter Brand',
            350,
            500,
            '/ karakter',
            '3 – 5 Hari Kerja',
            'Illustrator • Procreate',
            'Muhammad Rino Mardiansyah'
        ],

        [
            'Editing Video & Foto',
            'Editing Video Reels & TikTok',
            150,
            350,
            '/ video (60s)',
            '1 – 2 Hari Kerja',
            'Premiere • After Effects • CapCut',
            'Azriansyah Joanda Pratama'
        ],

        [
            'Desain Grafis',
            'Desain Kemasan & Label Produk',
            250,
            450,
            '/ varian kemasan',
            '2 – 4 Hari Kerja',
            'Illustrator • Photoshop',
            'Andisa Zahra A.'
        ],

        [
            '3D Modeling',
            '3D Modeling & Rendering Produk',
            400,
            750,
            '/ scene visual',
            '4 – 6 Hari Kerja',
            'Blender 3D • Substance',
            'Audi Khalila Sapphire'
        ],

        [
            'Desain Grafis',
            'Identitas Brand & Logo Starter',
            300,
            600,
            '/ paket konsep',
            '3 – 5 Hari Kerja',
            'Illustrator • Figma',
            'Andisa Zahra A.'
        ],

        [
            'Desain Grafis',
            'Company Profile & Katalog PDF',
            450,
            850,
            '/ booklet',
            '5 – 7 Hari Kerja',
            'InDesign • Illustrator',
            'Andisa Zahra A.'
        ]
    ].map((s, i) => ({
        id: i + 1,
        cat: s[0].replace('Desain Maskot', 'Desain Maskot'),
        name: s[1],
        min: s[2],
        max: s[3],
        unit: s[4],
        days: s[5],
        sw: s[6],
        lead: s[7],
        active: true,
        desc: 'Layanan ' + s[1] + ' oleh tim DKV dengan supervisi studio.'
    })),

    designers: [
        [
            'Muhammad Rino Mardiansyah',
            'Senior Designer',
            'Desain Maskot',
            'Ilustrasi Karakter & Maskot',
            'Illustrator, Procreate, Photoshop',
            4.9,
            18,
            1450000,
            4,
            '089667840335' //
        ],

        [
            'Azriansyah Joanda Pratama',
            'Lead Motion Designer',
            'Editing Video & Foto',
            'Video Reels & Motion Graphics',
            'Premiere Pro, After Effects, CapCut',
            5.0,
            24,
            2100000,
            4,
            '085210447235'
        ],

        [
            'Andisa Zahra A.',
            'Packaging Specialist',
            'Desain Grafis',
            'Kemasan & Dieline Produk',
            'Illustrator, Photoshop, InDesign',
            4.8,
            12,
            850000,
            3,
            '082114292424'
        ],

        [
            'Audi Khalila Sapphire',
            '3D Visualizer',
            '3D Modeling',
            '3D Product & Rendering',
            'Blender 3D, Substance, Cycles',
            4.9,
            15,
            1750000,
            3,
            '083824894458'
        ]
    ].map(d => ({
        name: d[0],
        role: d[1],
        cat: d[2],
        spec: d[3],
        tools: d[4],
        rating: d[5],
        done: d[6],
        komisi: d[7],
        cap: d[8],
        wa: d[9]
    })),

    set: {
        name: 'DKVKreasi Studio',
        slogan: 'Studio Kreatif & Layanan Desain Multimedia',
        desc: 'Unit produksi dan bisnis kreatif DKV untuk melayani pembuatan maskot, video editing, kemasan produk, dan aset 3D profesional bagi UMKM dan publik.',
        wa: '+62852-1044-7235',
        email: 'halo@dkvkreasi.sch.id',
        addr: 'Gedung KreatifDKV Studio Lt. 2, Indonesia',
        hours: '08:00 - 17:00 WIB (Senin - Jumat), 09:00 - 14:00 WIB (Sabtu)',
        logo: '',
        split: 70,
        rev: '2× Revisi Minor (Rekomendasi Studio)',
        dp: 50,
        tg: [1, 1, 1, 1],
        bank: [
            {
                n: 'BANK BCA',
                no: '827-091-2345',
                an: 'EDIT. IN Studio',
                t: 'Transfer Manual'
            },
            {
                n: 'BANK MANDIRI',
                no: '137-00-9876543-2',
                an: 'EDIT. IN Bisnis',
                t: 'Transfer Manual'
            },
            {
                n: 'QRIS BISNIS',
                no: 'ID202611982',
                an: 'EDIT. IN Studio',
                t: 'Scan Statis via WhatsApp'
            }
        ]
    },

    log: [
        {
            t: '10:15 WIB',
            m: 'Admin Budi memverifikasi DP 50% untuk ORD-2026-0042 (Ataya).',
            s: 'Verifikasi Bank Transfer'
        },
        {
            t: '09:30 WIB',
            m: 'Desainer Muhammad Rino Mardiansyah mengunggah draft sketsa konsep #2.',
            s: 'KuroBot Cafe Vector'
        },
        {
            t: '08:45 WIB',
            m: 'Request baru REQ-2026-0043 diterima dari Botanica Herbal Beauty.',
            s: 'Via Form Brief Publik'
        },
        {
            t: 'Kemarin',
            m: 'Admin mengonfirmasi serah terima final master file ORD-2026-0035.',
            s: 'Status Order Selesai'
        }
    ]
};

let DB;

try {
    DB = JSON.parse(localStorage.kdkv);
} catch (e) {}

if (!DB || DB.v != SEED.v) {
    DB = JSON.parse(JSON.stringify(SEED));
}

const save = () => {
    try {
        localStorage.kdkv = JSON.stringify(DB);
    } catch (e) {}
};

const addLog = (m, s) => {
    DB.log.unshift({
        t:
            new Date()
                .toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
                .replace('.', ':') + ' WIB',
        m,
        s
    });

    DB.log = DB.log.slice(0, 20);
};

const nextId = (pre, arr, w) => {
    const n =
        Math.max(
            0,
            ...arr.map(
                x => +x.id.split('-').pop().slice(0, 4)
            )
        ) + 1;

    return pre + String(n).padStart(4, '0');
};

const wa = (m, num) =>
    open(
        'https://wa.me/085210447235' +
            (num
                ? num.replace(/\D/g, '').replace(/^0/, '62')
                : DB.set.wa.replace(/\D/g, '')) +
            '?text=' +
            encodeURIComponent(m || 'Halo EDIT. IN')
    );

const cp = t => {
    navigator.clipboard && navigator.clipboard.writeText(t);
    toast('Disalin: ' + t);
};

function toast(m) {
    const d = document.createElement('div');

    d.className =
        'fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-semibold rounded-xl px-5 py-3 z-[60] shadow-xl';

    d.textContent = m;

    document.body.appendChild(d);

    setTimeout(() => d.remove(), 2600);
}

const closeM = () => $('mdl') && $('mdl').remove();

addEventListener(
    'keydown',
    e => e.key == 'Escape' && closeM()
);

function modal(t, b, o = {}) {
    closeM();

    const d = document.createElement('div');

    d.id = 'mdl';

    d.className =
        'fixed inset-0 bg-slate-900/50 z-50 grid place-items-center p-4';

    d.onclick = e => {
        if (e.target == d) closeM();
    };

    d.innerHTML = `
        <div class="bg-white rounded-2xl w-full ${
            o.w || 'max-w-lg'
        } max-h-[90vh] overflow-auto p-6 shadow-2xl text-[13px]">

            <div class="flex justify-between items-center mb-4">
                <b class="text-lg">${t}</b>

                <button
                    onclick="closeM()"
                    class="text-slate-400 text-xl"
                >
                    ✕
                </button>
            </div>

            <div class="space-y-3 text-xs">
                ${b}
            </div>

            ${
                o.ok
                    ? `
                        <div class="flex justify-end gap-2 mt-5 text-xs font-bold">

                            <button
                                onclick="closeM()"
                                class="bg-slate-100 rounded-xl px-4 py-2.5"
                            >
                                Batal
                            </button>

                            <button
                                id="mok"
                                class="bg-brand text-white rounded-xl px-5 py-2.5"
                            >
                                ${o.ok}
                            </button>

                        </div>
                    `
                    : ''
            }

        </div>
    `;

    document.body.appendChild(d);

    if (o.ok) {
        $('mok').onclick = () => {
            if (o.onOk() !== false) closeM();
        };
    }
}

const IC =
    'block w-full mt-1 bg-indigo-50/60 border border-slate-200 rounded-lg p-2.5 font-normal outline-none';

const fld = (id, l, v = '', o) =>
    `
        <label class="block font-bold">
            ${l}

            ${
                Array.isArray(o)
                    ? `
                        <select
                            id="${id}"
                            class="${IC}"
                        >
                            ${o
                                .map(
                                    x =>
                                        `<option ${
                                            x == v
                                                ? 'selected'
                                                : ''
                                        }>${x}</option>`
                                )
                                .join('')}
                        </select>
                    `
                    : o == 'area'
                    ? `
                        <textarea
                            id="${id}"
                            rows="3"
                            class="${IC}"
                        >${v}</textarea>
                    `
                    : `
                        <input
                            id="${id}"
                            type="${o || 'text'}"
                            value="${esc(v)}"
                            class="${IC}"
                        >
                    `
            }

        </label>
    `;

const g = id => $(id).value.trim();

function csv(n, rows) {
    const t = rows
        .map(
            r =>
                r
                    .map(
                        c =>
                            '"' +
                            String(c ?? '').replace(
                                /"/g,
                                '""'
                            ) +
                            '"'
                    )
                    .join(',')
        )
        .join('\n');

    const a = document.createElement('a');

    a.href = URL.createObjectURL(
        new Blob(['\ufeff' + t], {
            type: 'text/csv'
        })
    );

    a.download = n + '.csv';
    a.click();

    toast('File ' + n + '.csv diunduh');
}

const SC = {
    Baru: 'bg-indigo-100 text-brand',
    Menunggu: 'bg-amber-100 text-amber-800',
    Dikonversi: 'bg-emerald-100 text-emerald-700',
    Ditolak: 'bg-red-100 text-red-600',
    Diarsipkan: 'bg-slate-100 text-slate-600',
    'Sedang Dikerjakan': 'bg-indigo-100 text-brand',
    'Menunggu Review': 'bg-violet-100 text-violet-700',
    Revisi: 'bg-slate-200 text-slate-700',
    'Menunggu DP': 'bg-slate-100 text-slate-600',
    Selesai: 'bg-emerald-100 text-emerald-700',
    'DP 50%': 'bg-emerald-100 text-emerald-700',
    Lunas: 'bg-emerald-200 text-emerald-800',
    'Menunggu Pembayaran':
        'bg-slate-100 text-slate-600',
    'DP Terverifikasi':
        'bg-emerald-100 text-emerald-700',
    'Bukti Diterima':
        'bg-indigo-100 text-brand',
    'Dalam Verifikasi':
        'bg-violet-100 text-violet-700'
};

const pill = (
    t,
    c = 'bg-indigo-100 text-brand'
) =>
    `<span class="text-[10px] font-semibold rounded-full px-2.5 py-1 whitespace-nowrap ${c}">${t}</span>`;

const sp = s =>
    pill(
        s == 'DP 50%'
            ? 'DP 50% Terverifikasi'
            : s,
        SC[s]
    );

const card =
    'bg-white rounded-2xl shadow-sm p-5';

const act = () =>
    DB.orders.filter(
        o => o.status != 'Selesai'
    );

const btn = (t, p, f) =>
    `
        <button
            onclick="${f || ''}"
            class="rounded-xl px-4 py-2.5 ${
                p
                    ? 'bg-brand2 text-white shadow-lg shadow-indigo-200'
                    : 'bg-white shadow-sm'
            }"
        >
            ${t}
        </button>
    `;

const stats = a =>
    `
        <div class="grid grid-cols-4 gap-4 my-5">
            ${a
                .map(
                    ([l, v, s, i, c]) =>
                        `
                            <div class="bg-white rounded-2xl p-4 shadow-sm">

                                <div class="flex justify-between text-[10px] font-bold text-slate-500 tracking-wide">

                                    <span>${l}</span>

                                    <span class="w-8 h-8 rounded-lg bg-indigo-100 text-brand grid place-items-center">
                                        ${I(i)}
                                    </span>

                                </div>

                                <div class="text-2xl font-extrabold mt-1 ${
                                    c || ''
                                }">
                                    ${v}
                                </div>

                                <div class="text-[11px] text-slate-500 mt-1">
                                    ${s}
                                </div>

                            </div>
                        `
                )
                .join('')}
        </div>
    `;

const table = (h, rows, fn) =>
    `
        <div class="overflow-x-auto">

            <table class="w-full text-left text-xs">

                <thead class="bg-indigo-50/60 text-[10px] tracking-wide text-slate-500">

                    <tr>
                        ${h
                            .map(
                                x =>
                                    `<th class="p-3 font-bold">${x}</th>`
                            )
                            .join('')}
                    </tr>

                </thead>

                <tbody>

                    ${
                        rows
                            .map(
                                (r, i) =>
                                    `
                                        <tr
                                            class="border-b border-slate-50 ${
                                                fn
                                                    ? 'cursor-pointer hover:bg-indigo-50/40'
                                                    : ''
                                            }"
                                            ${
                                                fn
                                                    ? `onclick="${fn[i]}"`
                                                    : ''
                                            }
                                        >

                                            ${r
                                                .map(
                                                    c =>
                                                        `<td class="p-3">${c}</td>`
                                                )
                                                .join('')}

                                        </tr>
                                    `
                            )
                            .join('') ||
                        `
                            <tr>
                                <td
                                    class="p-6 text-center text-slate-500"
                                    colspan="${h.length}"
                                >
                                    Data tidak ditemukan
                                </td>
                            </tr>
                        `
                    }

                </tbody>

            </table>

        </div>
    `;

const pager = (n, pg, per) => {
    const T = Math.max(
        1,
        Math.ceil(n / per)
    );

    return `
        <div class="flex justify-between items-center mt-4 text-[11px]">

            <span>
                Menampilkan
                ${Math.min(
                    per,
                    Math.max(
                        0,
                        n - (pg - 1) * per
                    )
                )}
                dari ${n} data
            </span>

            <span class="flex gap-1 text-xs font-bold">

                <button
                    onclick="S.pg=Math.max(1,S.pg-1);R()"
                    class="bg-white shadow-sm rounded-lg px-3 py-1.5"
                >
                    Sebelumnya
                </button>

                ${Array.from(
                    { length: T },
                    (_, i) =>
                        `
                            <button
                                onclick="S.pg=${
                                    i + 1
                                };R()"
                                class="rounded-lg px-3 py-1.5 ${
                                    i + 1 == pg
                                        ? 'bg-brand2 text-white'
                                        : 'bg-white shadow-sm'
                                }"
                            >
                                ${i + 1}
                            </button>
                        `
                ).join('')}

                <button
                    onclick="S.pg=Math.min(${T},S.pg+1);R()"
                    class="bg-white shadow-sm rounded-lg px-3 py-1.5"
                >
                    Selanjutnya
                </button>

            </span>

        </div>
    `;
};

const srch = (ph, v) =>
    `
        <div class="flex-1 bg-indigo-50/60 rounded-xl px-3 py-2.5 flex gap-2 items-center">

            ${I('search')}

            <input
                value="${esc(v)}"
                oninput="S.q=this.value;S.pg=1;R()"
                placeholder="${ph}"
                class="bg-transparent outline-none w-full text-xs"
            >

        </div>
    `;

const sel = (k, all, opts, v) =>
    `
        <select
            onchange="S.${k}=this.value;S.pg=1;R()"
            class="bg-indigo-50/60 rounded-xl px-3 py-2.5 text-xs font-semibold outline-none"
        >

            <option value="">
                ${all}
            </option>

            ${opts
                .map(
                    o =>
                        `<option ${
                            o == v
                                ? 'selected'
                                : ''
                        }>${o}</option>`
                )
                .join('')}

        </select>
    `;

const ensureCust = (name, w) => {
    if (
        !DB.customers.some(
            c => c.name == name
        )
    ) {
        DB.customers.push({
            name,
            brand: name,
            wa: w || '-',
            prev: 0
        });
    }
};

function orderForm(p = {}) {
    modal(
        'Buat Pesanan Manual',

        `
            <datalist id="cl">
                ${DB.customers
                    .map(
                        c =>
                            `<option>${c.name}</option>`
                    )
                    .join('')}
            </datalist>

            <label class="block font-bold">
                Nama Customer

                <input
                    id="o1"
                    list="cl"
                    value="${esc(p.cust || '')}"
                    class="${IC}"
                >
            </label>

            ${fld(
                'o2',
                'Nomor WhatsApp',
                p.wa || ''
            )}

            ${fld(
                'o3',
                'Layanan / Judul Proyek',
                ''
            )}

            ${fld(
                'o4',
                'Kategori',
                p.cat || CATS[0],
                CATS
            )}

            ${fld(
                'o5',
                'Designer',
                'Menunggu Designer',
                [
                    'Menunggu Designer',
                    ...DB.designers.map(
                        d => d.name
                    )
                ]
            )}

            ${fld(
                'o6',
                'Nilai Order (Rp)',
                350000,
                'number'
            )}

            ${fld(
                'o7',
                'Deadline',
                today(),
                'date'
            )}
        `,

        {
            ok: 'Buat Pesanan',

            onOk() {
                if (!g('o1') || !g('o3')) {
                    toast(
                        'Nama customer dan layanan wajib diisi'
                    );

                    return false;
                }

                const id = nextId(
                    'ORD-2026-',
                    DB.orders
                );

                const d =
                    g('o5') ==
                    'Menunggu Designer'
                        ? ''
                        : g('o5');

                DB.orders.unshift({
                    id,
                    cust: g('o1'),
                    wa: g('o2'),
                    svc: g('o3'),
                    cat: g('o4'),
                    designer: d,
                    pay: 'Menunggu Pembayaran',
                    status: 'Menunggu DP',
                    progress: 0,
                    deadline: g('o7'),
                    amount: +g('o6')
                });

                ensureCust(
                    g('o1'),
                    g('o2')
                );

                addLog(
                    'Pesanan manual ' +
                        id +
                        ' dibuat untuk ' +
                        g('o1') +
                        '.',
                    'Input Manual Admin'
                );

                save();

                toast(
                    'Pesanan ' +
                        id +
                        ' berhasil dibuat'
                );

                window.R && R();
            }
        }
    );
}

function terima(id) {
    const r = DB.requests.find(
        x => x.id == id
    );

    if (!r) return;

    if (r.status == 'Dikonversi')
        return toast(
            'Request ini sudah dikonversi jadi order'
        );

    modal(
        'Terima & Buat Order — ' + r.id,

        `
            <p class="text-slate-600">
                ${r.name} • ${r.svc}
            </p>

            ${fld(
                't1',
                'Designer',
                r.rec ||
                    DB.designers[0].name,
                DB.designers.map(
                    d => d.name
                )
            )}

            ${fld(
                't2',
                'Nilai Order (Rp)',
                350000,
                'number'
            )}

            ${fld(
                't3',
                'Deadline',
                today(),
                'date'
            )}
        `,

        {
            ok: 'Buat Order',

            onOk() {
                const o = nextId(
                    'ORD-2026-',
                    DB.orders
                );

                DB.orders.unshift({
                    id: o,
                    cust: r.name,
                    wa: r.wa,
                    svc: r.svc,
                    cat: r.cat,
                    designer: g('t1'),
                    pay: 'Menunggu Pembayaran',
                    status: 'Menunggu DP',
                    progress: 0,
                    deadline: g('t3'),
                    amount: +g('t2')
                });

                r.status = 'Dikonversi';

                ensureCust(
                    r.name,
                    r.wa
                );

                addLog(
                    'Request ' +
                        r.id +
                        ' diterima & dikonversi jadi ' +
                        o +
                        '.',
                    'Konversi Request'
                );

                save();

                toast(
                    'Order ' +
                        o +
                        ' dibuat dari ' +
                        r.id
                );

                window.R && R();
            }
        }
    );
}

function brief(id) {
    const r = DB.requests.find(
        x => x.id == id
    );

    modal(
        'Brief ' + r.id,

        `
            <div class="grid grid-cols-2 gap-3">

                <div class="bg-indigo-50/60 rounded-xl p-3">
                    <b>Customer</b>
                    <br>
                    ${r.name}
                    <br>
                    ${r.wa}
                    <br>
                    ${r.email}
                </div>

                <div class="bg-indigo-50/60 rounded-xl p-3">
                    <b>Layanan</b>
                    <br>
                    ${r.svc}
                    <br>
                    ${r.cat}
                    <br>
                    Rekomendasi:
                    ${r.rec || '-'}
                </div>

            </div>

            <div class="bg-indigo-50/60 rounded-xl p-3">
                <b>Brief</b>

                <p class="mt-1 leading-relaxed">
                    ${r.brief}
                </p>
            </div>

            <p class="text-slate-500">
                Diajukan
                ${fd(r.date)}
                •
                ${r.status}
            </p>
        `
    );
}

/* shell admin */

const ADM = [
    ['Dashboard', 'space_dashboard', 'dashboard.html'],
    ['Request Masuk', 'move_to_inbox', 'request.html'],
    ['Detail Order', 'assignment', 'detail-order.html'],
    ['Pesanan', 'shopping_bag', 'pesanan.html'],
    ['Customer', 'group', 'customer.html'],
    ['Pembayaran', 'payments', 'pembayaran.html'],
    ['Katalog Jasa', 'category', 'katalog.html'],
    ['Designer / Staff DKV', 'badge', 'designer.html'],
    ['Laporan', 'bar_chart', 'laporan.html'],
    ['Pengaturan', 'settings', 'pengaturan.html']
];

const logout = () => {
    sessionStorage.removeItem('adm');
    location = 'login.html';
};

function sidebar(a) {
    const nb = DB.requests.filter(
        r => r.status == 'Baru'
    ).length;

    const no = DB.orders.filter(
        o => o.status == 'Menunggu DP'
    ).length;

    $('side').innerHTML = `
        <div class="px-5 pt-5 pb-3 text-center border-b border-slate-100">

            <div class="font-extrabold text-lg leading-none">
                ${
                    DB.set.logo
                        ? `<img src="${DB.set.logo}" class="h-8 mx-auto">`
                        : 'EDIT. IN'
                }
            </div>

            <div class="text-[10px] font-semibold tracking-wide text-slate-500">
                BISNIS JASA DKV
            </div>

        </div>

        <div class="px-4 pt-3 text-[10px] font-bold text-slate-500 tracking-wider">
            MENU UTAMA
        </div>

        <nav class="p-3 space-y-1">

            ${ADM.map(
                ([t, i, h]) => {
                    const b =
                        t == 'Request Masuk'
                            ? nb
                            : t == 'Detail Order'
                            ? no
                            : 0;

                    return `
                        <a
                            href="${h}"
                            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium ${
                                t == a
                                    ? 'bg-brand2 text-white shadow-md shadow-indigo-200'
                                    : 'text-slate-700 hover:bg-indigo-50'
                            }"
                        >

                            ${I(i)}

                            <span class="flex-1">
                                ${t}
                            </span>

                            ${
                                b
                                    ? `
                                        <span class="text-[10px] font-bold bg-emerald-800 text-white rounded-full px-2 py-0.5">
                                            ${b} Baru
                                        </span>
                                    `
                                    : ''
                            }

                        </a>
                    `;
                }
            ).join('')}

        </nav>

        <div class="m-3 p-3 rounded-xl bg-indigo-50">

            <div class="flex items-center gap-3">

                <div class="w-9 h-9 rounded-full bg-brand text-white text-xs font-bold grid place-items-center">
                    BS
                </div>

                <div>

                    <div class="text-xs font-bold">
                        Budi Santoso
                    </div>

                    <div class="text-[10px] text-emerald-700">
                        • Studio Agency • Online
                    </div>

                </div>

            </div>

            <button
                onclick="logout()"
                class="w-full mt-3 flex items-center justify-center gap-2 bg-white rounded-lg py-2 text-xs font-semibold"
            >
                ${I('logout')}
                Keluar / Logout
            </button>

        </div>
    `;
}

function gs(q) {
    const b = $('gsr');

    q = q.toLowerCase();

    if (!q)
        return b.classList.add(
            'hidden'
        );

    const L = [
        ...DB.orders
            .filter(
                o =>
                    (
                        o.id +
                        o.cust +
                        o.svc
                    )
                        .toLowerCase()
                        .includes(q)
            )
            .map(o => [
                'pesanan.html',
                o.id,
                o.cust + ' • ' + o.svc
            ]),

        ...DB.customers
            .filter(
                c =>
                    (
                        c.name +
                        c.brand
                    )
                        .toLowerCase()
                        .includes(q)
            )
            .map(c => [
                'customer.html',
                c.name,
                c.brand
            ]),

        ...DB.requests
            .filter(
                r =>
                    (
                        r.id +
                        r.name
                    )
                        .toLowerCase()
                        .includes(q)
            )
            .map(r => [
                'request.html',
                r.id,
                r.name
            ])
    ].slice(0, 6);

    b.innerHTML = L.length
        ? L.map(
              r =>
                  `
                    <a
                        href="${r[0]}?q=${encodeURIComponent(
                            r[1]
                        )}"
                        class="block px-3 py-2 hover:bg-indigo-50"
                    >
                        <b>${r[1]}</b>
                        <br>
                        <span class="text-slate-500">
                            ${r[2]}
                        </span>
                    </a>
                `
          ).join('')
        : `
            <div class="p-3 text-slate-500">
                Tidak ada hasil
            </div>
        `;

    b.classList.remove('hidden');
}

const bell = () => {
    $('bl').classList.toggle('hidden');
    $('dot').remove();
};

function shell(
    a,
    title,
    desc,
    badge,
    actions,
    body
) {
  
    document.body.className =
        'flex text-[13px]';

    document.body.innerHTML = `
        <aside
            id="side"
            class="w-[210px] shrink-0 bg-white rounded-2xl shadow-lg m-3 self-start sticky top-3"
        ></aside>

        <div class="flex-1 min-w-0 p-4 pl-2">

            <header class="flex items-center justify-between text-xs text-slate-600 mb-4">

                <div>
                    Admin Jasa DKV ›
                    <b class="text-ink">
                        ${a}
                    </b>
                </div>

                <div class="flex items-center gap-3 relative">

                    <div class="relative">

                        <div class="bg-white rounded-xl px-3 py-2 w-64 flex gap-2 items-center">

                            ${I('search')}

                            <input
                                oninput="gs(this.value)"
                                placeholder="Cari order, klien, request..."
                                class="outline-none w-full text-xs"
                            >

                        </div>

                        <div
                            id="gsr"
                            class="hidden absolute top-11 left-0 w-80 bg-white rounded-xl shadow-xl z-40 text-xs overflow-hidden"
                        ></div>

                    </div>

                    <button
                        onclick="bell()"
                        class="relative"
                    >
                        ${I('notifications')}

                        <i
                            id="dot"
                            class="absolute -top-0.5 right-0 w-2 h-2 rounded-full bg-red-500"
                        ></i>
                    </button>

                    <div
                        id="bl"
                        class="hidden absolute top-10 right-8 w-72 bg-white rounded-xl shadow-xl z-40 p-3 space-y-2"
                    >
                        ${DB.log
                            .slice(0, 5)
                            .map(
                                l =>
                                    `
                                        <div class="text-[11px] border-b pb-2">
                                            <b>${l.t}</b>
                                            ${l.m}
                                        </div>
                                    `
                            )
                            .join('')}
                    </div>

                    <span class="w-7 h-7 rounded-full bg-brand text-white grid place-items-center">
                        ${I('person')}
                    </span>

                </div>

            </header>

            <div class="flex justify-between items-start gap-4">

                <div>

                    <h1 class="text-2xl font-extrabold">
                        ${title}
                    </h1>

                    ${
                        badge
                            ? `
                                <span class="inline-block mt-1 text-[10px] font-bold text-brand bg-indigo-100 rounded-full px-2.5 py-1">
                                    ${badge}
                                </span>
                            `
                            : ''
                    }

                    <p class="text-slate-500 mt-2 max-w-md">
                        ${desc}
                    </p>

                </div>

                <div class="flex gap-2 text-xs font-bold shrink-0">
                    ${actions}
                </div>

            </div>

            ${body}

        </div>
    `;

    sidebar(a);
}

/* customer */

function lacak() {
    const v = $('oid')
        .value
        .trim()
        .toUpperCase();

    const o = DB.orders.find(
        x => x.id == v
    );

    const h = $('hasil');

    h.classList.remove('hidden');

    h.querySelector('div').innerHTML = o
        ? `
            <b>
                ${o.id} • ${o.svc}
            </b>

            <div class="text-slate-500">
                Status saat ini:
                <b>${o.status}</b>
                (${o.progress}%)
                •
                <a
                    class="text-brand font-bold"
                    href="lacak.html?id=${o.id}"
                >
                    Lihat detail →
                </a>
            </div>
        `
        : `
            <b>
                Order ID tidak ditemukan
            </b>

            <div class="text-slate-500">
                Periksa kembali ID dari admin via WhatsApp.
            </div>
        `;
}

function chead(a) {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
            <header class="bg-white shadow-sm sticky top-0 z-10">

                <div class="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">

                    <a
                        href="index.html"
                        class="flex items-center gap-2"
                    >

                        <span class="w-9 h-9 rounded-xl bg-brand text-white grid place-items-center shadow-lg shadow-indigo-200">
                            ${I('palette')}
                        </span>

                        <span class="leading-tight">

                            <b class="text-base font-semibold">
                                EDIT. IN
                            </b>

                            <br>

                            <span class="text-[9px] font-bold text-brand tracking-wide">
                                PORTFOLIO KREATIF
                            </span>

                        </span>

                    </a>

                    <nav class="flex gap-6 text-xs font-semibold">

                        ${[
                            ['Beranda', 'index.html'],
                            ['Layanan', 'layanan.html'],
                            ['Portofolio', 'portofolio.html'],
                            ['FAQ', 'index.html#faq'],
                            ['Lacak Pesanan', 'lacak.html']
                        ]
                            .map(
                                ([t, h]) =>
                                    `
                                        <a
                                            href="${h}"
                                            class="${
                                                t == a
                                                    ? 'bg-indigo-100 text-brand rounded-lg px-3 py-1.5 -my-1.5'
                                                    : ''
                                            }"
                                        >
                                            ${t}
                                        </a>
                                    `
                            )
                            .join('')}

                    </nav>

                    <button
                        onclick="wa('Halo EDIT. IN, saya ingin konsultasi')"
                        class="bg-wa text-white text-xs font-bold rounded-lg px-4 py-2.5 flex items-center gap-2"
                    >
                        ${I('chat')}
                        WhatsApp
                    </button>

                </div>

            </header>
        `
    );
}

function cfoot() {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <footer class="bg-indigo-50/60 mt-16 text-xs text-slate-600">

                <div class="max-w-5xl mx-auto grid grid-cols-4 gap-8 p-8">

                    <div>

                        <b class="text-sm text-ink">
                            EDIT. IN Studio
                        </b>

                        <p class="mt-3 leading-relaxed">
                            ${DB.set.desc}
                        </p>

                    </div>

                    <div>

                        <b class="text-sm text-ink">
                            Kategori Jasa
                        </b>

                        ${CATS.map(
                            c =>
                                `
                                    <a
                                        class="block mt-2"
                                        href="layanan.html?s=${SL[c]}"
                                    >
                                        ${c}
                                    </a>
                                `
                        ).join('')}

                    </div>

                    <div>

                        <b class="text-sm text-ink">
                            Studio
                        </b>

                        <p class="mt-3">
                            <b>Jam Operasional:</b>
                            <br>
                            ${DB.set.hours}
                        </p>

                    </div>

                    <div>

                        <b class="text-sm text-ink">
                            Bantuan & Kontak
                        </b>

                        <p class="mt-3">
                            Hotline WhatsApp
                            <br>
                            ${DB.set.wa}

                            <br><br>

                            Email Resmi
                            <br>
                            ${DB.set.email}
                        </p>

                    </div>

                </div>

                <div class="max-w-5xl mx-auto px-8 pb-6 flex justify-between text-[11px]">

                    <span>
                        © 2026 EDIT. IN Studio.
                        Seluruh hak cipta dilindungi.
                    </span>

                   

                </div>

            </footer>
        `
    );
}

function tugaskan(dn) {
    const A = act();

    if (!A.length)
        return toast(
            'Tidak ada order aktif'
        );

    modal(
        'Tugaskan Order ke Designer',

        fld(
            'a1',
            'Pilih Order',
            A[0].id +
                ' — ' +
                A[0].cust,
            A.map(
                o =>
                    o.id +
                    ' — ' +
                    o.cust
            )
        ) +
            fld(
                'a2',
                'Designer',
                dn ||
                    DB.designers[0].name,
                DB.designers.map(
                    d => d.name
                )
            ),

        {
            ok: 'Tugaskan',

            onOk() {
                const o =
                    DB.orders.find(
                        x =>
                            x.id ==
                            g('a1').split(
                                ' — '
                            )[0]
                    );

                const d =
                    DB.designers.find(
                        x =>
                            x.name ==
                            g('a2')
                    );

                const n = act().filter(
                    x =>
                        x.designer ==
                            d.name &&
                        x != o
                ).length;

                if (n >= d.cap) {
                    toast(
                        d.name +
                            ' sudah slot penuh (' +
                            n +
                            '/' +
                            d.cap +
                            ')'
                    );

                    return false;
                }

                o.designer = d.name;

                if (
                    o.status ==
                        'Menunggu DP' &&
                    o.pay !=
                        'Menunggu Pembayaran'
                ) {
                    o.status =
                        'Sedang Dikerjakan';
                }

                addLog(
                    o.id +
                        ' ditugaskan ke ' +
                        d.name +
                        '.',
                    'Penugasan Designer'
                );

                save();

                toast(
                    o.id +
                        ' → ' +
                        d.name
                );

                window.R && R();
            }
        }
    );
}