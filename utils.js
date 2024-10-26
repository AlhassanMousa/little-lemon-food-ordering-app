import { useRef, useEffect } from 'react';

export function getSectionListData(data) {
  // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
  // The title of each section should be the category.
  // The data property should contain an array of menu items.
  // Each item has the following properties: "id", "title" and "price"

  let sectionArray = [];

  const resultList = [];

  const sections = ['Appetizers', 'Salads', 'Beverages'];

  sections.forEach((section) => {
    const resultObject = {};

    sectionArray = data.filter((item) => item.category === section);

    resultObject.title = section;
    resultObject.data = sectionArray.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
      };
    });

    resultList.push(resultObject);
  });

  return resultList;
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
