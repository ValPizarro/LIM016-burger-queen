export const StateCard = () => {
    return (
        <div class="switch-holder">
            <div class="switch-label">
                <i class="fa fa-bluetooth-b"></i><span>Bluetooth</span>
            </div>
            <div class="switch-toggle">
                <input type="checkbox" id="bluetooth"/>
                <label for="bluetooth"></label>
            </div>
        </div>
    );
}