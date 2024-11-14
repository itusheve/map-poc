import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useState } from "react";
import { FormProvider, useFieldArray, useForm, useFormContext } from "react-hook-form";
import { z } from 'zod';
import Dialog from "../../components/Dialog";
import { DATE_FORMAT, TIME_FORMAT } from "../../utils/const";
import { TechnicCW, TechnicSH, TechnicToInitValue, TechnicsFormType, TechnicsList, TechnicsTypes } from "../Home/components/AddOperationalCommand";
// import { Accordion } from "../../components/Accordion";


export const OperationalCommandItemZod = z.object({
  id: z.number(),
  name: z.string(),
  requiredEntity: z.string(),
  isActive: z.boolean(),
  missions: z.array(z.string())
})

export const OperationalCommandListZod = z.array(OperationalCommandItemZod)

export type OperationalCommandItemT = z.infer<typeof OperationalCommandItemZod>;


export function useOperationalCommand() {
  const query = useQuery({
    queryKey: ['OperationalCommand'],
    queryFn: async () => {
      // TODO: change the dto to be from the api
      const dto = [{
        id: 1,
        name: 'command 1',
        requiredEntity: 'heil hamaim',
        isActive: true,
        missions: ['id1', 'id2']
      },
      {
        id: 2,
        name: 'command 2',
        requiredEntity: 'X ps',
        isActive: true,
        missions: ['id3', 'id4', 'id5']
      },
      {
        id: 3,
        name: 'command 3',
        requiredEntity: 'RTX',
        isActive: true,
        missions: ['id6', 'id7', 'id8', 'id9']
      }];
      const zod_res =  OperationalCommandListZod.safeParse(dto)
      if (zod_res.success) return zod_res.data;
      // TODO: raise an error 
      return []
    },

    
  })

  return {
    query
  }
}



export function OperationalCommandPage() {
  const operationalCommand = useOperationalCommand()
  const [isOpen, setIsOpen] = useState(false)
  return <div className="px-4 w-[100dvw]">
    {isOpen ? <>
      <CreateOperationalCommand />    
    </> : <></>}
    {operationalCommand.query.data?.map((row) => <div key={row.id}>
      {/* <pre>
        {JSON.stringify(row, null, 2)}
      </pre> */}
      <OperationalCommand  data={row} />
    </div>)}
    <button type="button" onClick={() => {setIsOpen(!isOpen)}}>new pm</button>
  </div>
}
/**
 * When changing this into a new file please rename this interface into props
 */
interface OperationalCommandI {
  data: OperationalCommandItemT,
}

/**
 * This component will display only one OP at each time
 */
export function OperationalCommand(props: OperationalCommandI) {
  const [isOpen, setIsOpen] = useState(false)
  const query = useQuery({
    queryKey: ['tracks'],
    queryFn: async () => {
      const dto = [{
        id: 1,
        name: 'track 1',
        coordinates: { long: 103232323, lat: 1245433543},
        stimulator: {
          name: 'stimulator 1',
          id: 1,
          status: 'w',
        },
        amplifier: {
          name: 'amplifier 1',
          id: 2,
          status: 'x',
        },
        antennaTX: {
          name: 'antennaTX 1',
          id: 2,
          status: 'x',
        },
        antennaRX: {
          name: 'antennaRX 1',
          id: 3,
          status: 'x',
        },
        
        // devices: [{
        //   id: 1,
        //   name: 'dfsdf',
        //   type: 'ww',
        //   status: 'Jammed',
        // },{
        //   id: 2,
        //   name: 'x2 as',
        //   type: 'ww',
        //   status: 'Active',
        // }]
      }]

      return dto
    },
    enabled: isOpen,
  })
  const [addTask, setAddTask] = useState(false)
  return <div className="">
    <div className="flex justify-between">
      <div>{props.data.name}</div>
      <div>{props.data.requiredEntity}</div>
      <div>{props.data.missions.length} tasks</div>
      <div>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>click to {isOpen ? 'close' : 'open'}</button>
      </div>
    </div>
    <hr />
    {isOpen ? <div>
        all the tracks
        <div className="grid grid-cols-10">
          <div></div>
          <div>track</div>
          <div>stimulator</div>
          <div>amplifier</div>
          <div>antenna Tx</div>
          <div>antenna Rx</div>
          <div>technic</div>
          <div>blocked freq</div>
          <div>time</div>
        </div>
        {query.data?.map((row) => <div key={row.id}>
          <pre>
            {JSON.stringify(row, null , 2)}
          </pre>
        </div>)}
      </div>  : <></>}
      <button type="button" onClick={() => setAddTask(!addTask)}>new task</button>
      <Dialog open={addTask} onClose={() => setAddTask(!addTask)} className="bg-slate-800">
        <div className="p-4 h-[40vh] w-[50vw] text-white" >
          <CreateNewTask />
        </div>
      </Dialog>
    {/* <Accordion open={isOpen} onOpenChange={() => setIsOpen(!isOpen)} >
      <div>
        all the tracks
        {query.data?.map((row) => <div key={row.id}>
          <pre>
            {JSON.stringify(row, null , 2)}
          </pre>
        </div>)}
      </div> 
    </Accordion> */}

  </div>
}

export interface CreateNewTaskFormI {
  times: {
    startDate: string,
    startTime: string,
    endDate: string,
    endTime: string,
    isPermanent: boolean
  }[],
  technicsUsed: typeof TechnicsList;
  technics: TechnicsFormType;

}


export type StepsT = 'DATES' | 'Technic' | 'Track'

export function CreateNewTask() {
  const form = useForm<CreateNewTaskFormI>();
  const [step , setStep] = useState<StepsT>('DATES')
  return <FormProvider {...form} >
    <form onSubmit={form.handleSubmit((data) => {
      console.log(data)
    })}>
      {step}
      {step === 'DATES' ? <NewTaskAddTime /> : <></>}
      {step === 'Technic' ? <CategoryDetails /> : <></>}
      {step === 'Track' ? <NewTaskAddTime /> : <></>}
      <button type="button" onClick={() => {
        if (step === 'DATES') setStep('Technic')
        else if (step === 'Technic') setStep('Track')
        else console.log('submitting')
      }}>next</button>
    </form>  
  </FormProvider>
  
}
export function NewTaskAddTime() {
  const form = useFormContext<CreateNewTaskFormI>();

  const operationalTimes = useFieldArray({
    control: form.control,
        name: 'times'
    })
    const isPermeate = operationalTimes.fields.at(0)?.isPermanent || false;

  return <div>

<div className="flex flex-col gap-2 pt-2">
            {operationalTimes.fields.map((field, index) => <div key={field.id} className="flex gap-4 items-center">
                <div>
                    start time
                    <input type="date" {...form.register(`times.${index}.startDate`)} />
                    <input type="time" {...form.register(`times.${index}.startTime`)} />

                </div>
                <div>
                    end time
                    <input type="date" {...form.register(`times.${index}.endDate`)} />
                    <input type="time" {...form.register(`times.${index}.endTime`)} />
                </div>
                {/* TODO: fix the colors */}
                {index === 0 ? <>
                    <button type="button" className={`${isPermeate ? ' text-green-700' : 'text-red-600'}`} onClick={() => {
                    
                        if (!isPermeate) form.setValue('times', [{
                            ...form.getValues('times')[0],
                            isPermanent: true
                        }])
                        else form.setValue(`times.${index}.isPermanent`, !isPermeate)
                        // operationalTimes.update(index, { isPermeate: !isPermeate })
                    }}>
                        permeate
                    </button>
                </> : <></>}
                <button type="button"
                    onClick={() => operationalTimes.remove(index)}>
                    Remove Time
                </button>
            </div>)}
        </div>
        <div className="pb-2">
            {/* FIXME: ask yinon and itamar about the time*/}
            <button type="button" onClick={() => operationalTimes.append({
                startDate:  moment().format(DATE_FORMAT),
                startTime: moment().format(TIME_FORMAT),
                endDate:  moment().add(5, 'hours').format(DATE_FORMAT),
                endTime: moment().add(5, 'hours').format(TIME_FORMAT),
                isPermanent: false
            })}>Add Time</button>
        </div>

  </div>
}


export function CategoryDetails() {
  const form = useFormContext<CreateNewTaskFormI>();
  const technics = form.watch('technics');
  return <div>
      <select {...form.register('technicsUsed')} multiple onChange={(e) => {
          // This is a rare case where we need to cast the selected values to the correct type because the type of the value is string but you know that the value is a TechnicsTypes
          const selectedValues = Array.from(e.target.selectedOptions, option => option.value) as TechnicsTypes[];
          console.log(selectedValues)
          // This is the way to set the value of the form
          if (technics === undefined) {
              for (const v of selectedValues) {
                  form.setValue(`technics.${v}`, TechnicToInitValue[v])
              }
              return ;
          }
          for (const v of Object.keys(technics)) {
              // const isSelectedValueIn = selectedValues.find(value => value === v) 
              if (!selectedValues.includes(v as TechnicsTypes)) form.setValue(`technics.${v as TechnicsTypes}`, null)
          }
          for (const v of selectedValues) {
              // const isSelectedValueIn = selectedValues.find(value => value === v) 
              if (!technics[v]) {
                  form.setValue(`technics.${v}`, TechnicToInitValue[v])
              }
          }
      }}>
          {TechnicsList.map(technic => <option key={technic.key} value={technic.key}>{technic.value}</option>)}
      </select>
      <pre>
          {JSON.stringify(technics, null, 2)}
      </pre>
      {technics?.CW && <TechnicCW />}
      {technics?.SH && <TechnicSH />}

  </div>

}

export interface CreateOperationalCommandFormI {
  isActive: boolean,
  name: string,
  requiredEntity: string,
}
export function CreateOperationalCommand() {
  const form = useForm<CreateOperationalCommandFormI>({
    defaultValues: {
      isActive: false,
      name: 'no name',
      requiredEntity: 'nf'
    }
  });

  return <form 
  className="flex gap-4 "
  onSubmit={form.handleSubmit((data) => {
    console.log(data)
  })}>
    <input type="checkbox" {...form.register('isActive')} />
    <input className="border " type="text" {...form.register('name')} placeholder="op name" />
    <input className="border " type="text" {...form.register('requiredEntity')} placeholder="requiredEntity" />
    <button className="bg-green-400">save</button>
  </form>
}