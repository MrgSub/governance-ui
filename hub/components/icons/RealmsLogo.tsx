interface Props extends React.SVGAttributes<SVGElement> {}

export function RealmsLogo(props: Props) {
  return (
    <svg {...props} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.12424 11.0525C8.0697 11.0734 8.02584 11.0067 8.06448 10.9629C9.11325 9.77335 9.74952 8.21142 9.74952 6.50088C9.74952 4.79034 9.11325 3.2284 8.06448 2.03884C8.02584 1.99501 8.0697 1.92831 8.12424 1.94929C9.95224 2.65246 11.2495 4.42517 11.2495 6.50088C11.2495 8.57658 9.95224 10.3493 8.12424 11.0525Z" />
      <path d="M8.52709 3.63445C8.55145 3.68982 8.47416 3.74547 8.42526 3.70985C8.19743 3.54389 7.79353 3.3125 7.3125 3.3125C6.375 3.3125 5.0625 4.4375 5.0625 6.5C5.0625 8.5625 6 9.6875 7.125 9.6875C7.73094 9.6875 8.18023 9.45251 8.42223 9.2863C8.4721 9.25205 8.55145 9.31018 8.52709 9.36555C7.92095 10.7437 6.68088 11.75 5.25 11.75C2.97183 11.75 0.75 9.3995 0.75 6.5C0.75 3.60051 2.97183 1.25 5.25 1.25C6.68088 1.25 7.92095 2.25632 8.52709 3.63445Z" />
    </svg>
  );
}