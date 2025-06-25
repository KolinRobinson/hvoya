// Логіка для дефолт інпута
import {computed, ref, useAttrs, watch} from 'vue'

type InputType = 'text' | 'email' | 'tel' | 'password' | 'number'

interface UseInputLogicOptions {
    type: InputType
    inputValue?: string
    emit: (event: 'update:inputValue', value: string) => void
}

export function useInputLogic({ type, inputValue = '', emit }: UseInputLogicOptions) {
    const value = ref(inputValue)
    const attrs = useAttrs()

    const inputMode = computed(() => {
        if (type === 'tel') return 'tel'
        if (type === 'text') return 'text'
        if (type === 'password') return 'password'
        if (type === 'email') return 'email'
        if (type === 'number') return 'numeric'
        return undefined
    })

    const autocomplete = computed(() => {
        if (type === 'tel') return 'tel'
        if (type === 'email') return 'email'
        if (type === 'password') return 'current-password'
        return undefined
    })

    const inputType = computed(() => {
        return type === 'password' ? 'password' : type
    })

    const processValue = (raw: string) => {
        switch (type) {
            case 'tel':
                return raw // formatPhone
            case 'email':
                return raw //  formatEmail
            case 'password':
                return raw.trim()
            default:
                return raw
        }
    }

    const onInput = (e: Event) => {
        const val = (e.target as HTMLInputElement).value
        const processed = processValue(val)
        value.value = processed
        emit('update:inputValue', processed)
    }

    watch(() => inputValue, (val) => {
        value.value = val ?? ''
    })

    return {
        value,
        inputType,
        inputMode,
        autocomplete,
        attrs,
        onInput
    }
}
