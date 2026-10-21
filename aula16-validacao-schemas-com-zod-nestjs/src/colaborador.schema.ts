import { z } from 'zod';

export const colaboradorSchema = z.object({
    nome: z.string().min(3, {message: 'O nome deve ter no mínimo 3 letras!'}),
    email: z.email({message:'O email deve ser valido '}),
   idade: z.number({message:'a idade deve ter um número valido'})
   .min(18, {message: 'A idade ninima deve ser 18 '})
   .max(65, {message: ' idade maxima permitida é 65 anos!'}),
   departamento: z .enum(['IT', 'RH', 'Comercial', 'Financeiro'],{
    error: () =>  (
        {message: 'Departamento deve ser obrigatoriamente TI, RH, Comercial ou Financeiro'}),
      }),
});
export type Colaborador = z.infer<typeof colaboradorSchema>;