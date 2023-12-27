import { imgType } from "../utility/cellSupportedFileTypes";

const columnData = [
    {
        id: 1, 
        field: 'username', 
        label: 'Username',
    },
    {
        id: 2, 
        field: 'gender', 
        label: 'Gender',
    },
    {
        id: 3, 
        field: 'last_visited', 
        label: 'Last Visited',
        sort: ({ a, b, isAscending }) => {
            let aa = a.split('/').reverse().join(),
            bb = b.split('/').reverse().join();
            return aa < bb ? isAscending ? -1 : 1 : (aa > bb ? isAscending ? 1 : -1 : 0);
        }
    },
    {
        id: 4, 
        field: 'test', 
        label: 'Score',
        getValue: ({ value }) => value.x + value.y
    },
    {
        id: 5, 
        field: 'file', 
        label: 'Dyanmic Value Type',
        cellRenderer: imgType
    }
];

const rowData = [
    { 
        "id": 1, 
        "username": "wotham0", 
        "gender": "Male", 
        "last_visited": "12/08/2019", 
        "test": {"x": 1, "y": 2},
        "type": "img",
        "file":"https://robohash.org/atquenihillaboriosam.bmp?size=32x32&set=set1"
    },
    { 
        "id": 2, 
        "username": "dbraddon2", 
        "gender": "Female", 
        "last_visited": "16/07/2018", 
        "test": {"x": 3, "y": 4}, 
        "type": "img",
        "file":"https://robohash.org/etsedex.bmp?size=32x32&set=set1"
    },
    { 
        "id": 3, 
        "username": "dridett3", 
        "gender": "Male", 
        "last_visited": "20/11/2016", 
        "test": {"x": 5, "y": 8},
        "type": "img",
        "file":"https://robohash.org/inimpeditquam.bmp?size=32x32&set=set1"
    },
    { 
        "id": 4, 
        "username": "gdefty6", 
        "gender": "Female", 
        "last_visited": "03/08/2019", 
        "test": {"x": 7, "y": 4}, 
        "type": "img",
        "file":"https://robohash.org/nobisducimussaepe.bmp?size=32x32&set=set1"
    },
    { 
        "id": 5, 
        "username": "hbeyer9", 
        "gender": "Male", 
        "last_visited": "10/10/2016", 
        "test": {"x": 2, "y": 2},
        "type": "img",
        "file":"https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1"
    },
    { 
        "id": 6, 
        "username": "dsduiu8", 
        "gender": "Male", 
        "last_visited": "11/10/2016", 
        "test": {"x": 8, "y": 2},
        "type": "file",
        "file":""
    },
    { 
        "id": 7, 
        "username": "uiouiu8", 
        "gender": "FeMale", 
        "last_visited": "1/1/2000", 
        "test": {"x": 8, "y": 12},
        "type": "select",
        "file":"",
        "values" : ['Option 1', 'Option 2', 'Option 3', 'Option 4']
    },
    { 
        "id": 8, 
        "username": "fileuser1", 
        "gender": "Male", 
        "last_visited": "05/05/2022", 
        "test": {"x": 6, "y": 3},
        "type": "file",
        "file":""
    },
    { 
        "id": 9, 
        "username": "fileuser2", 
        "gender": "Female", 
        "last_visited": "02/02/2023", 
        "test": {"x": 4, "y": 7},
        "type": "file",
        "file":""
    },
    { 
        "id": 10, 
        "username": "selectuser1", 
        "gender": "Male", 
        "last_visited": "11/11/2024", 
        "test": {"x": 9, "y": 1},
        "type": "select",
        "file":"",
        "values" : ['Option A', 'Option B', 'Option C']
    },
    { 
        "id": 11, 
        "username": "selectuser2", 
        "gender": "Female", 
        "last_visited": "12/12/2025", 
        "test": {"x": 3, "y": 9},
        "type": "select",
        "file":"",
        "values" : ['Option X', 'Option Y', 'Option Z']
    }
];

function getRandomItems(arr, n) {
    const shuffled = arr.sort(() => Math.random() - 0.5);
    
    return shuffled.slice(0, n);
  }

export const generateData = (rows) => {
    const tableData = {
        rows : getRandomItems(rowData, rows),
        cols : columnData
    }

    return tableData
}
