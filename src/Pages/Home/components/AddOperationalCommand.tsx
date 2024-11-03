import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

export const AddOperationalCommandFormStepOneZod = z.object({
    commandName: z.string().min(1),
    requiredEntity: z.string().min(1),
    operationalTimes: z.array(z.object({
        start: z.object({
            date: z.string().min(1), // TODO: write a valid date regex
            time: z.string().min(1) // TODO: write a valid time regex
        }),
        end: z.object({
            date: z.string().min(1), // TODO: write a valid date regex
            time: z.string().min(1) // TODO: write a valid time regex
        })
    })),
    
})

export const ModulationSchemaZod = z.union([z.literal('AM'), z.literal('FM'), z.literal('PM')])
export type ModulationType = z.infer<typeof ModulationSchemaZod>;
export const ModulationArray: ModulationType[] = ['AM', 'FM', 'PM'] as const;
export const TechnicCWZod = z.object({
    dbm: z.number(),
    frequency: z.number(),
    modulation: ModulationSchemaZod,
    LO: z.number()

})

export type TechnicCWType = z.infer<typeof TechnicCWZod>;

export const TechnicCWInitialValues: TechnicCWType = {
    dbm: 0,
    frequency: 0,
    modulation: 'AM',
    LO: 0
} ;
export const TechnicSHZod = z.object({
    name: z.string(),
    x: z.number(),

})

export type TechnicSHType = z.infer<typeof TechnicSHZod>;
export const TechnicSHInitialValues: TechnicSHType = {
    name: '',
    x: 0
}

// For each technic we have a different form and you have to specify the key of the technic and the value is the value that will be translated in the form
export type TechnicsTypes = 'CW' | 'SH' 
export const TechnicToInitValue: { 
    CW: TechnicCWType,
    SH: TechnicSHType
 } = {
    CW: TechnicCWInitialValues,
    SH: TechnicSHInitialValues,
}

export const TechnicsList: { key:  TechnicsTypes, value: string}[] = [
    {
        key: 'CW',
        value: 'CW'
    },
    {
        key: 'SH',
        value: 'SH'
    }
] ;



export const TechnicsFormZod = z.object({
    CW: TechnicCWZod.nullable(),
    SH: TechnicSHZod.nullable()
})

export type TechnicsFormType = z.infer<typeof TechnicsFormZod>;

interface AddOperationalCommandFormI {
    commandName: string;
    requiredEntity: string; // in the future this will be changed into type []
    operationalTimes: {
        start: {
            date: string;
            time: string;
        },
        end: {
            date: string;
            time: string;
        },
        isPermeate: boolean;
    }[];
    technicsUsed: typeof TechnicsList;
    technics: TechnicsFormType;

}
export function AddOperationalCommand() {
    const form = useForm<AddOperationalCommandFormI>();

    const [step, setStep] = useState<'General' | 'Category'>('General')

    return <FormProvider  {...form} >
        <form className=" text-white">
            {step === 'General' && <GeneralDetails nextStep={() => setStep('Category')} />}
            {step === 'Category' && <CategoryDetails />}
        </form>
    </FormProvider>

}
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import moment from "moment";
import { DATE_FORMAT, TIME_FORMAT } from "../../../utils/const";

interface FormStepsProps {
    nextStep: () => void;
}
export function GeneralDetails(props: FormStepsProps) {
    const form = useFormContext<AddOperationalCommandFormI>();
    const operationalTimes = useFieldArray({
        control: form.control,
        name: 'operationalTimes'
    })
    const isPermeate = operationalTimes.fields.at(0)?.isPermeate || false;
    return <div className=" text-red-600 bg-slate-300 border border-red-700 ">
        <div className=" text-red-600 bg-slate-300">operational Times</div>
        <div className="flex gap-2">
            <input type="text" placeholder="command name" {...form.register('commandName')} />
            <input type="text" placeholder="required entity" {...form.register('requiredEntity')} />
        </div>
        <div className="flex flex-col gap-2 pt-2">
            {operationalTimes.fields.map((field, index) => <div key={field.id} className="flex gap-4 items-center">
                <div>
                    start time
                    <input type="date" {...form.register(`operationalTimes.${index}.start.date`)} />
                    <input type="time" {...form.register(`operationalTimes.${index}.start.time`)} />

                </div>
                <div>
                    end time
                    <input type="date" {...form.register(`operationalTimes.${index}.end.date`)} />
                    <input type="time" {...form.register(`operationalTimes.${index}.end.time`)} />
                </div>
                {/* TODO: fix the colors */}
                {index === 0 ? <>
                    <button type="button" className={`${isPermeate ? ' text-green-700' : 'text-red-600'}`} onClick={() => {
                    
                        if (!isPermeate) form.setValue('operationalTimes', [{
                            ...form.getValues('operationalTimes')[0],
                            isPermeate: true
                        }])
                        else form.setValue(`operationalTimes.${index}.isPermeate`, !isPermeate)
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
                start: {
                    date: moment().format(DATE_FORMAT),
                    time: moment().format(TIME_FORMAT)
                },
                end: {
                    date: moment().add(5, 'hours').format(DATE_FORMAT),
                    time: moment().add(5, 'hours').format(TIME_FORMAT)
                },
                isPermeate: false
            })}>Add Time</button>
        </div>

        <button type="button" onClick={() => props.nextStep()}>Next command</button>

    </div>

}

export function CategoryDetails() {
    const form = useFormContext<AddOperationalCommandFormI>();
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


export function TechnicCW() {
    const form = useFormContext<AddOperationalCommandFormI>();

    return <div className="flex gap-3 flex-col bg-blue-600">
        <h1 className=" text-2xl">
        TechnicCW 
        </h1>
        <input type="number" {...form.register('technics.CW.dbm')} />
        <input type="number" {...form.register('technics.CW.frequency')} />
        <select {...form.register('technics.CW.modulation')}>
            {ModulationArray.map(modulation => <option key={modulation} value={modulation}>{modulation}</option>)}
        </select>
        <input type='checkbox' {...form.register('technics.CW.LO')} />
    </div>
}

export function TechnicSH() {
    const form = useFormContext<AddOperationalCommandFormI>();

    return <div className="flex gap-3 flex-col bg-green-400">
        <h1 className=" text-2xl">
            TechnicSH
        </h1>
        <input type="text" {...form.register('technics.SH.name')} />
        <input type="number" {...form.register('technics.SH.x')} />
        
    </div>
}


export function ChoosePath() {
    // here need to be the path to choose
    // const form = useFormContext<AddOperationalCommandFormI>();

    return <div>
        <div>
            path name
        </div>
    </div>
}