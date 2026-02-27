import { useId } from 'react'

import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SearchInput = () => {
    const id = useId()

    return (
        <div className='w-full max-w-xs space-y-2 '>
            <div className='relative'>
                <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-2 peer-disabled:opacity-50'>
                    <Search className='size-4' />
                    <span className='sr-only'>Search</span>
                </div>
                <Input id={id} type='text' placeholder='Search Blog' className='peer pl-8 rounded-sm h-[34px]' />
            </div>
        </div>
    )
}

export default SearchInput;
