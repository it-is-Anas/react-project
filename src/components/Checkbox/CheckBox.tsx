interface Props {
    label: string;
    value?: boolean;
    onChange?: (checked: boolean) => void;
}

export default function CheckBox({ label = '', value = false, onChange }: Props) {
    const customId = 'check-box-' + Math.floor(Math.random() * 100);

    return (
        <div className="w-[19em] my-[.1em] p-[.5em] flex justify-start items-center">
            <input
                id={customId}
                type="checkbox"
                checked={value}
                onChange={(e) => onChange?.(e.target.checked)}
            />
            <label className="ml-[.3em] text-[1em] font-[400]" htmlFor={customId}>
                {label}
            </label>
        </div>
    );
}
