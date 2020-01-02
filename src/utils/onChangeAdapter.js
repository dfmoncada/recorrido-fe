
export default function onChangeAdapter(onChange, name) {
  return value => onChange({target: {name, value}})
}

