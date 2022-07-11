/*
<h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
*/
const obQ = [
  {
    id: 1,
    title: "Array & Hashing",
  },
  {
    id: 2,
    title: "Two Pointers",
  },
  {
    id: 3,
    title: "Sliding Window",
  },
  {
    id: 4,
    title: "Stack",
  },
  {
    id: 5,
    title: "Binary Search",
  },
  {
    id: 6,
    title: "Linked List",
  },
  {
    id: 7,
    title: "Trees",
  },
  {
    id: 8,
    title: "Tries",
  },
  {
    id: 9,
    title: "Heap / Priority Queue",
  },
  {
    id: 10,
    title: "Backtracking",
  },
  {
    id: 11,
    title: "Graphs",
  },
  {
    id: 12,
    title: "Advance Graphs",
  },
  {
    id: 13,
    title: " 1-D Dyanmic Programming",
  },
  {
    id: 14,
    title: " 2-D Dyanmic Programming",
  },
  {
    id: 15,
    title: "Greedy",
  },
  {
    id: 16,
    title: "Intervals",
  },
  {
    id: 17,
    title: "Math & Geometry",
  },
  {
    id: 18,
    title: "Bit Manipulation",
  },
];
let queOuput = document.getElementById("queOutput");
queOuput.innerHTML = obQ
  .map((e) => {
    return `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${e.id}">
                        <button button class="accordion-button collapsed" type = "button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${e.id}" aria-expanded="true" aria-controls="collapse${e.id}">
                            <p class="title_class">${e.title}</p>
                        </button>
                    </h2>
                    <div id="collapse${e.id}" class="accordion-collapse collapse" aria-labelledby="heading${e.id}"
                        data-bs-parent="#queOutput">
                    <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the
                    collapse plugin adds the appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the showing and hiding via CSS
                    transitions. You can modify any of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div >
            `;
  }).join("");
