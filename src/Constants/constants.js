export const constants = {
    RADIO_OPTION: {
        DEFAULT: {key: 'DEFAULT', title: 'URUTKAN'},
        SORT_NAME: {key: 'SORT_NAME', title: 'Nama A-Z'},
        SORT_NAME_REVERSE: {key: 'SORT_NAME_REVERSE', title: 'Nama Z-A'},
        SORT_DATE: {key: 'SORT_DATE', title: 'Tanggal Terbaru'},
        SORT_DATE_REVERSE: {key: 'SORT_DATE_REVERSE', title: 'Tanggal Terlama'}
    },
};

export const RADIO_OPTION_ARR = [constants.RADIO_OPTION.DEFAULT,
    constants.RADIO_OPTION.SORT_NAME,
    constants.RADIO_OPTION.SORT_NAME_REVERSE,
    constants.RADIO_OPTION.SORT_DATE,
    constants.RADIO_OPTION.SORT_DATE_REVERSE
]

export const DUMMY_DATA = {
    data: [{
        transactionId: '21321321312312',
        bankSource: 'BNI',
        bankDestination: 'Bank Mandiri',
        ownerName: 'Jack Ma',
        accountNumber: '21321321312',
        uniqueCode: '50',
        transferNotes: 'coba transfer ya',
        amount: '50000',
        timestamp: '1615855516000',
        statusTransaction: 'ON_CHECK'

    }, {
        transactionId: '21321321312312',
        bankSource: 'BNI',
        bankDestination: 'Bank Mandiri',
        ownerName: 'Elon Musk',
        accountNumber: '21321321312',
        uniqueCode: '50',
        transferNotes: 'coba transfer ya',
        amount: '50000',
        timestamp: '1616028316000',
        statusTransaction: 'SUCCESS'

    }, {
        transactionId: '21321321312312',
        bankSource: 'Bank Trump',
        bankDestination: 'Mandiri',
        ownerName: 'Donald Trump',
        accountNumber: '21321321312',
        uniqueCode: '50',
        transferNotes: 'coba transfer ya',
        amount: '50000',
        timestamp: '1615769116000',
        statusTransaction: 'SUCCESS'
    }, {
        transactionId: '21321321312312',
        bankSource: 'Bank BSI',
        bankDestination: 'Bank Mandiri',
        ownerName: 'Ronaldo',
        accountNumber: '21321321312',
        uniqueCode: '50',
        transferNotes: 'coba transfer ya',
        amount: '50000',
        timestamp: '1615337116000',
        statusTransaction: 'SUCCESS'
    }, {
        transactionId:'21321321312312',
        bankSource: 'Bank BSI',
        bankDestination: 'Bank Mandiri',
        ownerName: 'Lebron James',
        accountNumber: '21321321312',
        uniqueCode: '50',
        transferNotes: 'coba transfer ya',
        amount: '50000',
        timestamp: 1614905116000,
        statusTransaction: 'ON_CHECK'
    }
    ]
}

export default {constants, RADIO_OPTION_ARR};
