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

export const AddOperationalCommandFormStepTwoZod = z.object({
    transmissionCategory: z.union([z.literal('CW'), z.literal('SH')]),
    dbm: z.number(),
    frequencies: z.array(z.object({
        frequency: z.number(),
        modulation: z.union([z.literal('AM'), z.literal('FM'), z.literal('PM')]),
        LO: z.number()
    }))
})

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
        }
    }[];
    transmissionCategory: 'CW' | 'SH';
    dbm: number;
    frequencies: {
        frequency: number;
        modulation: 'AM' | 'FM' | 'PM';
        // bandwidth: number;
        LO: number;
    }[];

}
export function AddOperationalCommand() {
    const form = useForm<AddOperationalCommandFormI>();

    const [step, setStep] = useState<'General' | 'Category'>()

    return <FormProvider  {...form}>
        <form>
            {step === 'General' && <GeneralDetails nextStep={() => setStep('Category')} />}
            {step === 'Category' && <CategoryDetails />}
        </form>
    </FormProvider>

}
import { useFormContext } from "react-hook-form";
import { useState } from "react";

interface FormStepsProps {
    nextStep: () => void;
}
export function GeneralDetails(props: FormStepsProps) {
    const form = useFormContext();
    const operationalTimes = useFieldArray({
        control: form.control,
        name: 'operationalTimes'
    })
    return <div>
        <input type="text" {...form.register('commandName')} />
        <input type="text" {...form.register('requiredEntity')} />
        <h2>operational Times</h2>
        {operationalTimes.fields.map((field, index) => <div key={field.id}>
            <input type="date" {...form.register(`operationalTimes.${index}.start.date`)} />
            <input type="time" {...form.register(`operationalTimes.${index}.start.time`)} />
            <input type="date" {...form.register(`operationalTimes.${index}.end.date`)} />
            <input type="time" {...form.register(`operationalTimes.${index}.end.time`)} />
            <button type="button"
                onClick={() => operationalTimes.remove(index)}>
                Remove Time
            </button>
        </div>)}
        <button type="button" onClick={() => operationalTimes.append({
            start: {
                date: '',
                time: ''
            },
            end: {
                date: '',
                time: ''
            }
        })}>Add Time</button>

        <button type="button" onClick={() => props.nextStep()}>Next command</button>

    </div>

}

export function CategoryDetails() {
    const form = useFormContext();

    return <div>
        <input type="text" {...form.register('commandName')} />
        <input type="text" {...form.register('requiredEntity')} />

    </div>

}