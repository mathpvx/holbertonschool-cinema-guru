import './components.css'

export default function Activity({ activity }) {
  const text =
    activity?.message ||
    (activity?.type && activity?.title
      ? `You ${activity.type} “${activity.title}”`
      : activity?.title || 'Activity')
  return (
    <li className="activity-item">
      <p className="activity-text">{text}</p>
    </li>
  )
}
