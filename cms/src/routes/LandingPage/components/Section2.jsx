import './Section2.scss';

function Section2() {
    const group = [
        {text: 'code', className: ''},
        {text: '✦', className: 'Design'},
        {text: 'design', className: 'Outline'},
        {text: '✦', className: 'Code'},
    ];
    // Six groups, so translating by -50% loops seamlessly
    const items = Array(6).fill(group).flat();

    return (
        <div className="Section-2" aria-hidden="true">
            <div className="Marquee">
                {items.map((item, index) => (
                    <span key={index} className={item.className}>{item.text}</span>
                ))}
            </div>
        </div>
    );
}

export default Section2;
