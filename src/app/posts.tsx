import { For } from 'solid-js';
import { colors } from '../config';

import attach_logo from "../assets/attach/attach_logo_full_v2.png";
import Section, { Arrow, Icon } from './section';

export type Post = {
    title: string;
    icon?: string;
    content: string;
    blog: string;
};

const Posts = (props: { title: string; posts: Post[]; solo?: boolean; default_opened: boolean; }) => {
    return (
        <Section title={props.title} solo={props.solo} default_opened={props.default_opened} >
            <For each={props.posts}>
                {(link: Post) => (
                    <div class="w-full">
                        <div class="relative w-full h-[60px] flex items-center pr-4">
                            <div class={`absolute inset-[0] left-[25px] z-[-1] rounded-lg ${colors.bg.links}`}></div>
                            <Icon icon={link.icon ? link.icon : attach_logo} title={props.title} />
                            <div class={`w-full overflow-hidden leading-5 pl-4 ${colors.bg.mask_links}`}>
                                <h3 class="font-bold whitespace-nowrap">{link.title}</h3>
                                <p class={`${colors.text['link-content']} font-medium text-sm whitespace-nowrap`}>{link.content}</p>
                            </div>
                            <Arrow />
                        </div>
                    </div>
                )}
            </For>
        </Section>
    );
};

export default Posts;