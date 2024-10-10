# Code Style Guidelines

- **File Length:** Files should not exceed 150 lines unless approved.
- **Function Length:** No function should exceed 30 lines without approval.
- **Component Creation:** Always define an interface for component props.
- **Interface Naming:** Interface names should end with "Interface", e.g., `ExampleInterface`.
- **Data Retrieval:** When retrieving data from a server, validate it using Zod's safe parse.
- **Props Passing:** Do not pass a prop to a component solely for forwarding it to a child component.
- **Variable Declaration:** Start with `const` and switch to `let` only if necessary.
- **Type Restrictions:** Avoid using the "any" type. Always specify the type.
- **Component Documentation:** For every new component, document it using JSDoc.
- **Data Fetching:** Use React Query or Redux with async thunk for data retrieval.
- **Library Typing:** Always provide appropriate types when working with libraries (e.g., React Query, Redux, Jotai).
- **State Logic:** If substantial logic evolves from the state, consider encapsulating it in a separate hook.
- **Logic Duplication:** Do not replicate logic using copy-paste; create distinct hooks as needed.
- **Array Operations:** Only use `array.map()` if generating a new array.
- **Exports:** Favor named exports (`export`) over default exports (`export default`).
- **Assistance:** If stuck on a task for over an hour longer than anticipated, contact Shaked first, followed by Yoni.
- **Types Organization:** If there are numerous type definitions, organize them in a dedicated folder.
  
### Props Restrictions
- Do not pass components as props unless necessary (consult Shaked).
- Do not pass functions as props unless essential (consult Shaked). Always provide the function's types.

- **Complex Functions:** Provide a JSDoc description for intricate functions.
- **Spelling:** Use a spell-checker extension to avoid spelling mistakes.
- **Component Design:** Consult Shaked regarding the abstraction level when creating a new component.
- **Global Variables:** Avoid global variables. If deemed necessary, obtain approval from Shaked.

### Named conventions
#### variable
* use state variables will start be camelCase ``` const [isOpen, setIsOpen] = useState(true) ```
* atoms will be CamelCase in declaration for example in the ``` state.ts ``` file ``` export const taskManagementNetworkAtom = atom<TaskManagementNetworkResponseArrayType>([]); ```
* when using the value you only use the useAtom when you need both the setter and getter of the atom.
* when using the atom have to be snack_based_named ``` const set_task_management_network = useSetAtom(taskManagementNetworkAtom); ``` 
* when using useSignal hook names use the camelCase ``` isOpen = useSignal(false) ``` 

* not using margin without telling shaked
* always add translation to the text
* don't create a long if statement like {condition ? more then 5 row : more then 5 row}
* don't use !important in the css without telling shaked
* don't use the one name css class like w-85 without telling shaked
* don't use the if and in the same line like {condition && <div>...</div>}
* class name should be in the format of ``` <div className="class-name">...</div> ``` and also with the component or or file related name unless it's a global class for example ``` <div className="task-management-dialog-header-item">...</div> ```
* when checking phones sizes check Iphone 12 pro , Iphone 14 pro and Samsung S8


---------

### Working with jira 
* when searching for the most urgent task you can look for project = "FA" ORDER BY priority ASC and this will give you the most urgent task