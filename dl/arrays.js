const in1 = [
  {
    id: 9,
    name: 'John Admin Doe'
  },
  {
    id: 12,
    name: 'Jane Admin Doe'
  },
  {
    id: 15,
    name: 'Jacob Admin Doe'
  }
]

const in2 = [
  {
    adminId: 9,
    policies: [
      { name: 'UserViewer', bit: 1 },
      { name: 'UserEditor', bit: 2 },
      { name: 'PostViewer', bit: 4 },
      { name: 'AdminViewer', bit: 16 }
    ]
  },
  {
    adminId: 12,
    policies: [
      { name: 'UserViewer', bit: 1 },
      { name: 'AdminViewer', bit: 16 }
    ]
  },
  {
    adminId: 15,
    policies: [
      { name: 'PostViewer', bit: 4 },
      { name: 'PostEditor', bit: 8 }
    ]
  }
]

// const expected = [
//   {
//     id: 9,
//     name: 'John Admin Doe',
//     policies: [
//       'UserViewer',
//       'UserEditor',
//       'PostViewer',
//       'AdminViewer'
//     ],
//     policiesInt: 23
//   },
//   {
//     id: 12,
//     name: 'Jane Admin Doe',
//     policies: [
//       'UserViewer',
//       'AdminViewer'
//     ],
//     policiesInt: 17
//   },
//   {
//     id: 15,
//     name: 'Jacob Admin Doe',
//     policies: [
//       'PostViewer',
//       'PostEditor'
//     ],
//     policiesInt: 12
//   }
// ]

function setPoliciesInt(arr) {
  let policiesIntArray = [];
  arr.map(item => {
    item.policiesInt = 0;
    for (let i = 0; i < item.policies.length; i++) {
      item.policiesInt += item.policies[i].bit;
    }
    policiesIntArray.push(item.policiesInt)
  });
  for (let i = 0; i < arr.length; i++) {
    arr[i].policiesInt = policiesIntArray[i];
  }
}

function removeBit(arr) {
  arr.map(item => {
    for (let i = 0; i < item.policies.length; i++) {
      item.policies[i] = item.policies[i]['name'];
    }
  });
}

function removeAdminId(arr) {
  for (let i = 0; i < arr.length; i++) {
    delete arr[i].adminId;
  }
}

function main () {

  const expected = [...in1];
  for (let i = 0; i < expected.length; i++) {
    expected[i] = Object.assign(expected[i], in2[i]);
  }

  setPoliciesInt(expected);
  removeBit(expected);
  removeAdminId(expected);

  console.log(expected);
  
}

main()
