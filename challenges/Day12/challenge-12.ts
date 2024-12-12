export function calculatePrice(ornaments: string): number {
    let cost = 0;
    let prev = undefined;
    const nums = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100,
        undefined: 0
    }
    for(const ornament of ornaments) {
        cost += nums[ornament] > nums[prev]
            ? -nums[prev]
            : nums[prev];
        prev = ornament
    }
    cost += nums[ornaments.at(-1)];
    return cost ? cost : undefined;
}
