


export default function Home() {
  return (
   <div className="bg-red-500 min-h-screen">
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
    <button>Click me</button>
    <input type="text" placeholder="Enter your name" />
    <select>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div className="flex flex-col items-center justify-center">
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
      <button>Click me</button>
      <input type="text" placeholder="Enter your name" />
      <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
      <div className="flex flex-col items-center justify-center">

      </div>
       <ul>
         <li>Item 1</li>
         <li>Item 2</li>
         <li>Item 3</li>
       </ul>
    </div>
   </div>
  );
}
